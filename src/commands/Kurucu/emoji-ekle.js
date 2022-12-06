const { Util, Permissions } = require("discord.js")

module.exports = {
    name: 'emoji-yükle',
    aliases: ["emojiyükle", "emoji-ekle", "ee"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
     
    if(!args.length) return message.reply({content : "Öncelikle bir ya da birden fazla emoji belirt!"})
    for(const rawEmoji of args) {
        const parsedEmoji = Util.parseEmoji(rawEmoji)
        if(parsedEmoji) {
            const bgg = parsedEmoji.animated ? ".gif" : ".png";
            const bg = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + bgg}`
            message.guild.emojis.create(bg, parsedEmoji.name).then(emoji => {
                message.reply({content: `Emoji Eklendi: \`${emoji.url}\``}).then(msg => {
                })
            }).catch(e => {
                console.log(e)
                return message.reply({content: "Bir hata oluştu, **BoranGkdn#0001** ulaşınız."}).then(msg => {
                  setTimeout(() => msg.delete(), 5000)
                })
            })
        }
    }
}
}