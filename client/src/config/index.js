const env = process.env.APP_ENV || 'development'

const config = {
    development: require('./development.js'),
    // production: require('./production.config'),
    // staging: require('./staging.config')
}

module.exports = config[env]