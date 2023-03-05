
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [131071] })
require("colors")
require('dotenv').config()


client.config = require('./Config')
client.commands = new Discord.Collection();
client.functions = {
    ErrorEmbed: require('./functions/ErrorEmbed')
}

require('./handlers/slashes')(client)
require("./handlers/register.slashes")(client)
require("./handlers/events")(client)


client.login(process.env.TOKEN)