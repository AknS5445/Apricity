const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");

module.exports = {
    name: 'öp',
    aliases: ["kiss"],
  
    execute: async (client, message, args, embed, author, channel, guild) => {
	if (!message.guild) return;
    let user = message.mentions.users.first() || guild.members.cache.get(args[0]);
    var linkler = [
        "https://tenor.com/view/kiss-love-gif-19168972",
        "https://tenor.com/view/kiss-jason-hayes-alana-seal-team-i-love-you-gif-23577295",
        "https://tenor.com/view/love-you-lots-kiss-peachcat-gif-13985240",
        "https://tenor.com/view/eva-green-casino-royale-vesper-lynd-kiss-kissing-gif-17566750"
    ]
       var link = linkler[Math.floor(Math.random() * (linkler.length))]
       var söz = [
        "kullanıcısına ruhunu verdi.",
        "kullanıcısını öptü.",
        "kullanıcısına kocamaann bir öpücük verdi!",
        "kullanıcısının yedi!!"
    ]
       var söz = söz[Math.floor(Math.random() * (söz.length))]
    if (!user) return message.reply({ embeds: [embed.setDescription('Öpeceğin şanslı kişiyi etiketlemelisin.')] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    message.reply({ content: `
<a:Blelele:952283582494281838> ${author} kullanıcısı ${user} ${söz}
${link}`}) 
}
}

