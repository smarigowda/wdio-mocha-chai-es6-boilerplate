exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    specs: [
        './specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox'
    }],
    logLevel: 'info',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://duckduckgo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function(capabilities, specs) {
        require('@babel/register');
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    }
}
