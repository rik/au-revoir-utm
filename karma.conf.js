module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: ['src/utm.js', 'test/*.js'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless', 'FirefoxHeadless'],
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],
            },
        },
        client: {
            mocha: {
                // change Karma's debug.html to the mocha web reporter
                reporter: 'html',
            },
        },

        singleRun: true,
        concurrency: Infinity,
    })
}
