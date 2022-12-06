const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");
const ms = require("ms")

module.exports = {
  name: "allmove",
  aliases: ["all-move", "toplu-taşı"],
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.guild) return;
    
    if (message.member.permissions.has(8n)) {
        let kanal_1 = message.guild.channels.cache.get(args[0]);
        let kanal_2 = message.guild.channels.cache.get(args[1]);
        if (kanal_1 && kanal_2) {
        [...kanal_1.members.values()].forEach((member,index) => {
        setTimeout(async () => {
        await member.voice.setChannel(kanal_2)
        },index*1500)
        })
        message.reply({ content: (`${kanal_1} kanalında ki **${kanal_1.members.size}** adet kullanıcı ${kanal_2} kanalına taşındı.`)})
        } else return message.reply({ content:`Öncelikle komutu doğru kullanmalısınız! 
Örn: \`.allmove (taşınacak-kanal-id) (taşıyacağınız-kanal-id)\``});
    }
  },
};
