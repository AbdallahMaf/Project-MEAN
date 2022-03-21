// check env.
var env = process.env.NODE_ENV || 'development'

// fetch env. config
var config = require('./config.json');
var envConvig = config[env];

//add env. config values to process.env
Object.keys(envConvig).forEach(key => process.env[key] = envConvig[key]);
