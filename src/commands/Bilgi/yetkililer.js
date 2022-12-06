const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");

module.exports = {
  name: "yetkili-bilgi",
  aliases: ["yetkililer", "ytliler", "yt-bilgi"],
  execute: async (client, message, args, embed, author, channel, guild) => {
        var yetkilisayısı = (message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff)).size)
        var sesdekiler = (message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff)).filter(yetkilises => yetkilises.voice.channel).size)
        var atkifler = (message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff) && yetkili.presence && yetkili.presence.status !== "offline").size)
        let sesdeolmayanlar = message.guild.members.cache.filter(yetkili => yetkili.roles.cache.has(config.registration.staff)).filter(yetkilises => !yetkilises.voice.channel && yetkilises.presence && yetkilises.presence.status != "offline")
        message.reply({ embeds: [embed.setDescription(`
 Sunucumuzdaki toplam yetkili sayısı: **${yetkilisayısı}**
 Sunucumuzdaki toplam aktif yetkili sayısı: **${atkifler}**
 Sesdeki toplam yetkili sayısı: **${sesdekiler}**

Aktif olupta seste olmayan yetkililer;
**-** ${sesdeolmayanlar.map(yetkili => `${yetkili}`).join(', ')}
`)] })
    }
}
