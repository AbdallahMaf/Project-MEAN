// check env.
let env = process.env.NODE_ENV || 'development'

// fetch env. config
let config = require('./config.json');
let envConvig = config[env];

//add env. config values to process.env
Object.keys(envConvig).forEach(key => process.env[key] = envConvig[key]);
