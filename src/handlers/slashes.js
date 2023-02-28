const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, '../', 'commands');




module.exports = function (client) {
	console.log("Started loading commands".yellow)
	const commandFolders = fs.readdirSync('./src/commands');

	for (const folder of commandFolders) {
			const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
			
			for (const file of commandFiles) {
				const command = require(`../commands/${folder}/${file}`);
				if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`.yellow);
		}
			}
		}
	
	/* 
	
	*/
	console.log(`${client.commands.size} commands successfully loaded`.green)
}
