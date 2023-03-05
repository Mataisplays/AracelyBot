const { EmbedBuilder } = require("@discordjs/builders");

module.exports = function(cerror, i){
    return new EmbedBuilder()
        .setTitle("Error")
        .setDescription(cerror)
        .setAuthor({ name: i.user.tag, iconURL: i.user.displayAvatarURL()})
        .setColor([250, 105, 74])
}