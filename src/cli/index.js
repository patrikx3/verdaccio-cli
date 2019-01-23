const verdaccioCli = require('../')
const program = require('commander')
const pkg = verdaccioCli.pkg;

const fs = require('fs').promises
const path = require('path')
const fsExtra = require('fs-extra')

const parseConfig = async (opts) => {
    const yaml = require('js-yaml')
    //console.warn(opts)
    const yamlString = (await fs.readFile(opts.config)).toString()
    const yamlConfig = yaml.load(yamlString)
    //console.warn(yamlConfig)
    return yamlConfig
}

const availableCacheRoutine = [
    'clean'
]

const start = async() => {


    program
        .version(pkg.version)
        .option('-c, --config <config>', 'This is required to provide the Verdaccio configuration.')
        .option('-d, --dry', 'Do not actually clean the cache, just print some info.')

    program
        .command('cache <routine>')
        .description(`Help to manage the Verdaccio cache.`)
        .action(async (routine, options) => {

            try {
                if (!availableCacheRoutine.includes(routine)) {
                    return console.error(`The cache <routine> is not available '${routine}, the available routines are ${availableCacheRoutine.join(',')}`)
                }

                //console.warn(options)
                const configPath = path.dirname(program.config)

                const config = await parseConfig({
                    config: program.config
                })
                const storagePath = path.resolve(configPath, config.storage)
                const db = require(path.resolve(storagePath, '.sinopia-db.json'))

                const packageFolders = await fs.readdir(storagePath)
                //console.warn(packageFolders)

                if (program.dry === true) {
                    console.info(`
Own packages: ${db.list.join(',')}
Own packages count: ${db.list.length}

Total of package count without own packages: ${packageFolders.length - db.list.length}
`)
                    return
                }
                const packageFoldersWithoutOwn = []

                const packageFolderPathStatAwaitable = []

                for(let packageFolderPath of packageFolders) {
                    packageFolderPathStatAwaitable.push(
                        fs.stat(path.resolve(storagePath, packageFolderPath))
                    )
                }

                const packageFolderPathStatAwaitableResult = await Promise.all(packageFolderPathStatAwaitable)

                for(let statIndex in packageFolderPathStatAwaitableResult) {
                    const stat = packageFolderPathStatAwaitableResult[statIndex]
                    //console.warn(stat)
                    const packagePath = packageFolders[statIndex]
                    if (stat.isDirectory() && !db.list.includes(packagePath)) {
                        packageFoldersWithoutOwn.push(packagePath)
                    }
                }


                const removablePathAwaitable = []
                for(let packagePath of packageFoldersWithoutOwn) {
                    removablePathAwaitable.push(
                        fsExtra.remove(path.resolve(storagePath, packagePath))
                    )
                }
                await Promise.all(removablePathAwaitable)

                console.info('Removed all cached packages and kept all own packages.')

                //console.warn(packageFoldersWithoutOwn.length, packageFolders.length)

            } catch(e) {
                console.error(e)

            }

        })

    program.parse(process.argv);



    if (!process.argv.slice(2).length) {
        program.outputHelp();
    } else if (program.config === undefined) {
        return console.error(`The ${pkg.name} program's first argument should be like '--config=/verdaccio/path/config.yaml' and should present.`)
    }




}

start();