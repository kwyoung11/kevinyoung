const { environment } = require('@rails/webpacker')
const erb =  require('./loaders/erb')
console.log(process.env);
environment.loaders.append('erb', erb)
module.exports = environment
