const Discord = require("discord.js")
module.exports = {
    name: "tag-info",
    aliases: ["taginfo", "tag-bilgi", "tagbilgi"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
const cst = args.slice(0).join(" ")
if(!cst) return message.reply("Öncelikle geçerli bir tag belirtmelisin! \`Örn: .tag-bilgi ✱\`")
const sonuc = message.guild.members.cache.filter(mr => mr.user.username.includes(cst)).size
const sonuc2 = message.guild.members.cache.filter(mr => mr.user.username.includes(cst)).map(mr => mr).join('|')

message.reply("Anlık olarak belirtilen tag'da `"+sonuc+"` kullanıcı bulunmakta!")
 message.channel.send(`**Tagdaki kullanıcılar sırasıyla;** \n${sonuc2 || "Tag'da kimse bulunamadı."}`)
}
}