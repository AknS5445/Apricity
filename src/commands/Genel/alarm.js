const Discord = require('discord.js');
const ms = require('ms');
const config = require("../../../config.json")
const prefix = config.bot.prefix
module.exports = {
    name: "alarm",
    aliases: ["hatırlatıcı"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        let time = args[0]
        if (!time) return message.reply({ embeds: [embed.setDescription(`${prefix}alarm <1s,1m,1h> <hatırlatacağım şey>`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let alarm = args.slice(1).join(' ')
        if (!alarm) return message.reply({ embeds: [embed.setDescription(`${prefix}alarm <1s,1m,1h> <hatırlatacağım şey>`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        message.reply({ embeds: [embed.setDescription(`Alarm kuruldu **${time}** sonra size bildireceğim!`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        setTimeout(() => {
            author.send(`${author}, Hatırlatmamı istediğin şeyin zamanı geldi!\n**${alarm}**`).catch(err => channel.send(`${author}, Hatırlatmamı istediğin şeyin zamanı geldi!\n**${alarm}**`))
        }, ms(time));
    }
}