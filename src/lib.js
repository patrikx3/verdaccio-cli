const pkg = require('../package')
const fs = require('fs').promises
const path = require('path')
const chalk = require('chalk')

const parseConfig = async (opts) => {
    const yaml = require('js-yaml')
    //console.warn(opts)
    const yamlString = (await fs.readFile(opts.config)).toString()
    const yamlConfig = yaml.load(yamlString)
    //console.warn(yamlConfig)
    return yamlConfig
}

module.exports.defaults = async () => {
    const { program } = require('commander')

    //console.warn(options)
    const configPath = path.dirname(program.opts().config)

    const config = await parseConfig({
        config: program.opts().config
    })
    const storagePath = path.resolve(configPath, config.storage)
    const dbPath = path.resolve(storagePath, '.verdaccio-db.json');
    const db = require(dbPath)

    return {
        configPath: configPath,
        config: config,
        storagePath: storagePath,
        db: db,
        dbPath: dbPath,
    }
}

module.exports.confirmInfo = (options) => {
    if (options.confirm !== true) {
        console.info(chalk.yellow(`
Please add a flag --confirm and only add this flag after you stopped Verdaccio!

`))
    }

}

module.exports.parseConfig = parseConfig
module.exports.pkg = pkg
