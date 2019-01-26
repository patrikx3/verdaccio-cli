const fs = require('fs').promises
const path = require('path')
const fsExtra = require('fs-extra')

const lib = require('../lib')
const availableCacheRoutine = [
    'clean',
    'info',
]

const chalk = require('chalk')

const cache = async (routine, options) => {

    const program = require('commander')


    if (!availableCacheRoutine.includes(routine)) {
        return console.error(`The cache <routine> is not available '${routine}', the available routines are ${availableCacheRoutine.join(', ')}.`)
    }

    const defaults = await lib.defaults();

    const packageFolders = await fs.readdir(defaults.storagePath)
    //console.warn(packageFolders)

    const packageFoldersWithoutOwn = []

    const packageFolderPathStatAwaitable = []

    for (let packageFolderPath of packageFolders) {
        packageFolderPathStatAwaitable.push(
            fs.stat(path.resolve(defaults.storagePath, packageFolderPath))
        )
    }

    const packageFolderPathStatAwaitableResult = await Promise.all(packageFolderPathStatAwaitable)

    for (let statIndex in packageFolderPathStatAwaitableResult) {
        const stat = packageFolderPathStatAwaitableResult[statIndex]
        //console.warn(stat)
        const packagePath = packageFolders[statIndex]
        if (stat.isDirectory() && !defaults.db.list.includes(packagePath)) {
            packageFoldersWithoutOwn.push(packagePath)
        }
    }

    if (options.confirm !== true) {
        console.info('Please add a flag --confirm and only add this flag after you stopped Verdaccio!')
    }


    if (program.dry === true || routine === 'info' || options.confirm !== true) {
        console.info(`
Own packages: ${defaults.db.list.join(', ')}
Own packages count: ${defaults.db.list.length}

Total of package count without own packages: ${packageFoldersWithoutOwn.length}
`)

        lib.confirmInfo(options)

        return
    }

    const removablePathAwaitable = []
    for (let packagePath of packageFoldersWithoutOwn) {
        removablePathAwaitable.push(
            fsExtra.remove(path.resolve(defaults.storagePath, packagePath))
        )
    }
    await Promise.all(removablePathAwaitable)

    console.info('Removed all cached packages and kept all own packages.')

    //console.warn(packageFoldersWithoutOwn.length, packageFolders.length)

}

module.exports.cache = cache
