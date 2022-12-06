const config = require("../../../config.json");
const db = require("quick.db");
const moment = require("moment");
moment.locale("tr");
module.exports = {
    name: "cihaz-bilgi",
    aliases: ["cihaz", "bg"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        var member = message.mentions.members.first() || guild.members.cache.get(args[0]) || message.member;
    let Cihaz = {
      web: 'İnternet Tarayıcısı',
      desktop: 'Bilgisayar (App)',
      mobile: 'Mobil'
    }
    let clientStatus;
    if (member.presence && member.presence.status !== 'offline') { clientStatus = `${Cihaz[Object.keys(member.presence.clientStatus)[0]]}` } else { clientStatus = 'Çevrimdışı/Görünmez' }
        message.reply({ embeds: [embed.setDescription(`${member.toString()} kullanıcısının bağlandığı cihaz: \`${clientStatus}\` 
`)] });

    }
}