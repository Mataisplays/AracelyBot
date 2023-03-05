const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { inspect } = require('util')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Solo el owner')
        .addStringOption(x => x.setName('code').setDescription('que te valga').setRequired(true))
    ,
    async execute(interaction, client) {
        if (!client.config.owners.includes(interaction.user.id)) return interaction.reply({ embeds: [client.functions.ErrorEmbed("Solo los dueños pueden usar este comando", interaction)] })

        try {
            const evaled = await eval(interaction.options.getString('code'))
            const substracted = substract(inspect(evaled), 1000)
            interaction.reply({
                embeds: [{
                    "title": "Codigo Evaluado",
                    "color": 781449,
                    "fields": [
                      {
                        "name": "**Type:**",
                        "value": `\`\`\`${typeof(evaled)}\`\`\``,
                        "inline": true
                      },
                      {
                        "name": "**Time:**",
                        "value": `\`\`\`${Date.now() - interaction.createdTimestamp}ms\`\`\``,
                        "inline": true
                      },
                      {
                        "name": "**Input:**",
                        "value": `\`\`\`js\n${interaction.options.getString('code')} \`\`\``
                      },
                      {
                        "name": "**Output:**",
                        "value": `\`\`\`js\n${substracted}\`\`\``
                      }
                    ]
                  }]
            })
        } catch (e) {
            interaction.reply({
                embeds: [
                    {
                      "title": "Codigo Evaluado",
                      "color": 15748686,
                      "fields": [
                        {
                          "name": "**Time:**",
                          "value": `\`\`\`${Date.now() - interaction.createdTimestamp}ms\`\`\``,
                          "inline": true
                        },
                        {
                          "name": "**Input:**",
                          "value": `\`\`\`js\n${interaction.options.getString('code')} \`\`\``
                        },
                        {
                          "name": "**Error Output:**",
                          "value": `\`\`\`js\n${e.toString().substring(0, 1020) + "..."}\`\`\``
                        }
                      ]
                    }
                  ]
            })
        }

        function substract(txt, n) {
            if (txt.length > n) {
                txt = txt.substring(0, n) + "..."
                return txt
            } else {
                return txt
            }
        }

    },
};