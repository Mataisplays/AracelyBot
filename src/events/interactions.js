const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	once: true,
	async execute(client) {
		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`.red);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};