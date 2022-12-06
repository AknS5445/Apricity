const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");

module.exports = {
  name: "yetkili-say",
  aliases: ["ytsay", "yetkilisay", "ysay"],
  execute: async (client, message, args, embed, author, channel, guild) => {
	  if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    var aktif = (message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff) && yetkili.presence && yetkili.presence.status !== "offline").size)    
    let sesdeolmayanlar = message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff)).filter(yetkilises => !yetkilises.voice.channel && yetkilises.presence && yetkilises.presence.status != "offline")
        message.reply({ content: `
Anlık olarak **${aktif}** aktif yetkili var, seste olmayan yetkililer şunlardır;
**-** ${sesdeolmayanlar.map(yetkili => `${yetkili}`).join(', ')}
`}) 
    }
}
