const program = require('commander')
const lib = require('./lib')
const pkg = lib.pkg

const start = async() => {

    program
    .version(pkg.version)
    .option('-c, --config <config>', 'This is required to provide the Verdaccio configuration.')
    .option('-d, --dry', 'Do not actually clean the cache, just print some info.')

    program
        .command('cache <routine>')
        .description(`The <routine> can be info or clean.`)
        .option('--confirm', 'Only use this flag, when you have stopped Verdaccio at first.')
        .action(async (routine, options) => {
            try {
                await require('./routine/cache').cache(routine, options);
            } catch(e) {
                console.error(e)
            }
        })

    program
        .command('package')
        .description(`Please use instead of package => pkg.`)
        .action(async ( options) => {
            console.info("Please use instead of package => pkg.")
        })

    const pkgKeepMinimum = 3
    program
        .command('pkg <routine>')
        .description(`The <routine> can be info or keep.`)
        .option('--confirm', 'Only use this flag, when you have stopped Verdaccio at first.')
        .option('-m, --min <n>', 'The default and minimum is ' + pkgKeepMinimum, parseInt)
        .action(async (routine, options) => {
            try {
                await require('./routine/package').default({ minimum: pkgKeepMinimum}, routine, options);
            } catch(e) {
                console.error(e)
            }
        })

    program
        .command('pkg-rm <pkg-name>')
        .description(`The <pkg-name> is a name we want to remove.`)
        .option('--confirm', 'Only use this flag, when you have stopped Verdaccio at first.')
        .action(async (pkgName, options) => {
            try {
                await require('./routine/package').remove(pkgName, options);
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
