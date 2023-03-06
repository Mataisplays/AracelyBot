const { Events, ActivityType } = require('discord.js');
/**
 * client
 */

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setPresence({ activities: [{ name: 'with discord.js', type: ActivityType.Watching }] });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};