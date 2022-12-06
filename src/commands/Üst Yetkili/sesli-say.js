const { MessageEmbed } = require("discord.js");
const config = require("../../../config.json")
module.exports = {
    name: 'sesli',
    aliases: ["sesli-say", "ses"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let sesli = message.guild.members.cache.filter(x => x.voice.channel).size
        let members = message.guild.members.cache.filter(m => m.voice.channelId);
        let topses = message.guild.members.cache.filter(s => s.voice.channel);
        let yayın = topses.filter(s => s.voice.streaming);
        let mik = topses.filter(s => s.voice.selfMute).size;
        let kulak = topses.filter(s => s.voice.selfDeaf).size;
        let pubID = config.kategoriler.publickategorisi;
        let privID = config.kategoriler.privatekategorisi;
        let yetkili = message.guild.members.cache.filter(x => {
            return x.user.username.includes("XXXXXXXXXX") && x.voice.channel && x.roles.cache.has(config.registration.staff)
        }).size
        let taglı = message.guild.members.cache.filter(x => {
            return x.user.username.includes(config.registration.GuilDTag) && x.voice.channel && x.roles.cache.has(config.roles.team)
        }).size
        message.reply({ embeds: [embed.setDescription(`
\`●\` Sesli kanallarında **${sesli}** kullanıcı bulunuyor.
\`●\` Sesli kanallarında **${yetkili}** yetkili bulunuyor.
\`●\` Sesli kanallarında **${taglı}** taglı bulunuyor.

Public odalarda toplam **${members.filter(m => pubID.includes(m.voice.channel.parentId)).size}** kullanıcı var!
Private odalarda toplam **${members.filter(m => privID.includes(m.voice.channel.parentId)).size}** kullanıcı var!

- Mikrofonu kapalı: **${mik}**
- Kulaklığı kapalı: **${kulak}**
- Yayında: **${yayın.size}** 
    `)] });
      
    }
}