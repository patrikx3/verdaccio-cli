const fs = require('fs').promises
const fsExtra = require('fs-extra')
const path = require('path')

const lib = require('../lib')
const availablePackageRoutine = [
    'keep',
]
const Table = require('cli-table');

const chalk = require('chalk')

const defaultFn = async (settings, routine, options) => {

    const { root } = settings;

    const program = require('commander')

    if (!availablePackageRoutine.includes(routine)) {
        return console.error(`The '${routine}' <routine> is not available , the available routines are ${availablePackageRoutine.join(', ')}.`)
    }

    const { minimum } = settings
    if (options.min === undefined) {
        options.min = minimum
    }
    if (isNaN(options.min)) {
        console.warn(`The options --min variable be a number.`)
        return
    }
    if (options.min < minimum) {
        console.warn(`The options --min variable number must be at least ${minimum}.`)
        return
    }

    const defaults = await lib.defaults();

    const db = defaults.db

    const awaitablePackages = []
    for(let dbItem of db.list) {
        awaitablePackages.push(
            fs.readFile(path.resolve(defaults.storagePath, `${dbItem}/package.json`))
        )
    }

    let foundBuffers
    try {
        foundBuffers = await Promise.all(awaitablePackages);
    } catch(e) {
        if (e.code === 'ENOENT') {
            const pkgName = path.basename(path.dirname(e.path))
            console.warn(chalk.yellow(`
It looks like the package '${pkgName}' present is the db, but is deleted from file system.
To fix this error, please do this:
${program._name} --config ${program.config} pkg-rm ${pkgName}
`))
            return
        } else {
            throw e
        }
    }

    const pkgRegistry = {}

    for(let dbItemIndex in db.list) {
        const dbItem = db.list[dbItemIndex]
        const pkgBuffer = foundBuffers[dbItemIndex]
        pkgRegistry[dbItem]  = JSON.parse(pkgBuffer.toString());
    }

    if (program.dry === true || routine === 'info' || options.confirm !== true) {
        console.info(`
Own packages: ${defaults.db.list.join(', ')}
Own packages count: ${defaults.db.list.length}
Will keep last versions: ${options.min}
`)

        const table = new Table({
            head: ['Package', 'Version count']
        });
        for(let pkgName of Object.keys(pkgRegistry)) {
            table.push(
                [pkgName, Object.keys(pkgRegistry[pkgName].time).length - 2]
            )
        }

        console.info(table.toString())

        lib.confirmInfo(options)

        return
    }

    const table = new Table({
        head: ['Package', 'Kept versions']
    });
    for await(let pkgName of Object.keys(pkgRegistry)) {
        const pkgNamed = pkgRegistry[pkgName]
        if (!pkgNamed.hasOwnProperty('_distfiles')) {
            pkgNamed['__distfiles'] = {}
        }
        if (!pkgNamed.hasOwnProperty('_attachments')) {
            pkgNamed['_attachments'] = {}
        }
        const versions = Object.assign({}, pkgNamed.time)
        delete versions['created'];
        delete versions['modified']

        Object.keys(versions).forEach(versionKey => {
            versions[versionKey] = new Date(versions[versionKey])
        })

        // the sorted shows the order array => by time
        let sortedVersions = {}
        sortedVersions = Object.keys(versions).sort((a, b) => {
            return versions[b] - versions[a]
        })


        const createVersionFile = (version) => {
            return `${pkgName}/${pkgName}-${version}.tgz`
        }

        let minBuffer = 0
        for await(let version of sortedVersions) {
            minBuffer++
            if (minBuffer <= options.min) {
                continue
            }
            /*
            pkg.versions = version as key
            pkg.time = versions as key, but there is modified and created
            pkg._distfiles => delete key pkg._distfiles[pkg-name-verions.tgz]
            pkg._attachments => delete key pkg._attachments[pkg-name-versions.tgz]
             */
            const versionName = createVersionFile(version)
            delete pkgNamed.versions[version]
            delete pkgNamed.time[version]
            delete pkgNamed._distfiles[versionName]
            delete pkgNamed._attachments[versionName]

            await fsExtra.remove(path.resolve(defaults.storagePath, versionName))
        }


        for await (let pkgVersionKey of Object.keys(pkgNamed.versions)) {
            if (!pkgNamed.time.hasOwnProperty(pkgVersionKey)) {
                delete pkgNamed.versions[pkgVersionKey]
                const versionName = createVersionFile(pkgVersionKey)
                delete pkgNamed._distfiles[pkgVersionKey]
                delete pkgNamed._attachments[pkgVersionKey]
                await fsExtra.remove(path.resolve(defaults.storagePath, versionName))
            }
        }

        const removeFileNamed = async(prop) => {
            let versionsNamed = Object.keys(pkgNamed[prop])

            for await(let versionName of versionsNamed) {
                let version = versionName.slice(pkgName.length + 1)
                version = version.slice(0, -4)
                if (!pkgNamed.time.hasOwnProperty(version)) {
                    delete pkgNamed.versions[version]
                    delete pkgNamed._distfiles[versionName]
                    delete pkgNamed._attachments[versionName]
                    await fsExtra.remove(path.resolve(defaults.storagePath, versionName))
                }
            }
        }
        await removeFileNamed('_distfiles')
        await removeFileNamed('_attachments')

        table.push(
            [pkgName, `${Object.keys(pkgNamed.time).length - 2}`]
        )

        //console.info(sortedVersions)
        //console.log(Object.keys(sortedVersions).length)
        //console.info()

       await fs.writeFile(path.resolve(defaults.storagePath, `${pkgName}/package.json`), JSON.stringify(pkgNamed, null, 4))

    }

    console.info(table.toString())
}

const remove = async(pkgName, options) => {

    const program = require('commander')
    const defaults = await lib.defaults();
    const db = defaults.db

    if (!db.list.includes(pkgName)) {
        console.warn(`
This package '${pkgName}' is not present in the db!

The available db packages: ${db.list.join(", ")}

`)
        return
    }

    if (program.dry === true || options.confirm !== true) {
        console.info(`Could remove package: ${pkgName}`)

        lib.confirmInfo(options)
        return;
    }
    await fsExtra.remove(path.resolve(defaults.storagePath, pkgName))
    db.list = db.list.filter(dbItem =>  dbItem !== pkgName)
    await fs.writeFile(defaults.dbPath, JSON.stringify(db))

    console.info(`Removed package: ${pkgName}`)

}

module.exports.default = defaultFn
module.exports.remove = remove
