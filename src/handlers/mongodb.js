const mongoose = require('mongoose')

module.exports = function (client) {
    console.log(`Connecting to AracelyDatabase...`.yellow)
    mongoose.connect(client.config.mongolink).catch(e => console.error(`${e}`.red))
    console.log(`Connected to AracelyDatabase`.green)
}