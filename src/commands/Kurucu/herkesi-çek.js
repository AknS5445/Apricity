const Discord = require('discord.js')

module.exports = {
    name: "herkesi-çek",
    aliases: ["herkesiçek", "herkesitaşı", "herkesi-taşı"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
const id = args[0]
if (!id)
return message.reply({ content: `Öncelikle kullanıcıların çekileceği kanal ID'sini belirtmelisin.`});
message.guild.members.cache.filter(a => a.voice.channel).forEach(x => x.voice.setChannel(id))
message.channel.send({ content: `Tüm sesli kanallarda ki kullanıcılar <#${id}> odasına taşındı!`});
} }