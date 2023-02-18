const Discord = require('discord.js')
const client = new Discord.Client({intents: [131071]})
require('dotenv').config()

client.once('ready', c => {
console.log(`Ready at ${client.tag}`)
})

client.login(process.env.TOKEN)