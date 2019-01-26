#!/usr/bin/env node
if (!require('fs').existsSync(`${__dirname}/../node_modules`)) {
    require('child_process').execSync(`cd ${__dirname}/.. && npm install --only=prod`, {
        stdio: 'inherit'
    });
}

require('../src')
