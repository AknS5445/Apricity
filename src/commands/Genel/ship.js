const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");

module.exports = {
    name: 'ship',
    aliases: ["ilişki"],
  
    execute: async (client, message, args, embed, author, channel, guild) => {
	if (!message.guild) return;
    let user = message.mentions.users.first() || guild.members.cache.get(args[0]);
    var shipler = [
        "17",
        "32",
        "21",
        "80",
        "37",
        "26",
        "78",
        "67",
        "59",
        "54",
        "25",
        "87",
        "77",
        "62",
        "15",
        "2",
        "7",
        "79",
        "95",
        "92",
        "41",
        "11",
        "99",
        "evlenmelisiniz.",
        "66"
    ]
       var ship = shipler[Math.floor(Math.random() * (shipler.length))]
    if (!user) return message.reply({ embeds: [embed.setDescription('Kimi shiplemek istersin?')] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    message.reply({ content: `
    <:sarikiz:952323524570267728> ${author} kullanıcısıyla ${user} ile arasında ki ilişki derecesi **%${ship}** olarak gözüküyor!`}) 
}
}

