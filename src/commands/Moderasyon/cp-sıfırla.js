const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");
const ms = require("ms")
module.exports = {
  name: "cp-sıfırla",
  aliases: ["cps", "cezapuan-sıfırla"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
    var member = message.mentions.users.first() || guild.members.cache.get(args[0]);

if (!member) {
let cp = db.delete(`points_${author.id}`) || [];
message.reply({ embeds: [embed.setDescription(`Ceza puanı verilerin başarıyla silindi.`)] });
}
  
if(member) {
let cp = db.delete(`points_${member.id}`) || [];
message.reply({ embeds: [embed.setDescription(`${member} kullanıcısının ceza puanı verileri başarıyla silindi.`)] });

};
  
}
  

  }