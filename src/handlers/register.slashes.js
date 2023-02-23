const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

module.exports = function (client) {
	const commands = [];

	const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));


	for (const file of commandFiles) {
		const command = require(`../commands/${file}`);
		commands.push(command.data.toJSON());
	}

	const rest = new REST({ version: '10' }).setToken(`${client.config.token}`);


	(async () => {
		try {
			console.log(`Started refreshing ${commands.length} application (/) commands.`.yellow);


			const data = await rest.put(
				Routes.applicationGuildCommands(client.config.id, '841077479568441384'),
				{ body: commands },
			);

			console.log(`Successfully refreshed ${data.length} application (/) commands.`.green);
		} catch (error) {

			console.error(error);
		}
	})();
}