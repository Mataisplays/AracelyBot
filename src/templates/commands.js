const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('command')
		.setDescription('description'),
	async execute(interaction) {
		
	},
};