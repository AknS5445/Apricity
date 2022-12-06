const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");
const ms = require("ms")

module.exports = {
  name: "ban-liste",
  aliases: ["ban-say", "bansay"],
  execute: async (client, message, args, embed, author, guild) => {
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.penals.ban.staff)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const ban = await message.guild.bans.fetch();
    if (!ban) { message.channel.send({ content: "Sunucuda banlı kullanıcı bulunmamaktır."}).then((e) => setTimeout(() => { e.delete(); }, 5000));
    message.react(red)
    return }
    message.guild.bans.fetch().then(banned => {
    message.reply({ content: (`Sunucuda **${banned.size}** adet yasaklı kullanıcı bulunmakta.`)}) 
    })
  },
};