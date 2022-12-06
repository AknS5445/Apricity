const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "ping",
    aliases: ["pong", "bot", "uptime-süresi"],
    execute: async (client, message, args, embed, author, channel) => {
      if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const ownerr = client.users.cache.get("796263552771817472");

    var Uptime = new MessageButton()
    .setLabel("Uptime Süresi")
    .setCustomId("uptime")
    .setStyle("SECONDARY")
    .setEmoji('863716120074256384')


    var Ping = new MessageButton()
    .setLabel("Ping")
    .setCustomId("ping")
    .setStyle("SECONDARY")
    .setEmoji('863716120074256384')

    var Iptal = new MessageButton()
    .setLabel("İşlemi İptal Et!")
    .setCustomId("iptal_button")
    .setStyle("DANGER")
    .setEmoji(config.emojis.no)

    const row = new MessageActionRow()
    .addComponents([Ping, Uptime, Iptal])


embed.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) }).setColor("BLACK").setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setThumbnail(message.guild.iconURL({ dynamic: true }))
embed.addField(`BOT İŞLEMLERİ!`,`

İstediğiniz butona tıklayıp bilgi alabilirsiniz, işlemi iptal et butonuna basarak işlemi iptal edebilirsiniz.
`)

    let msg = await message.channel.send({ embeds: [embed], components: [row] });
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })
    collector.on("collect", async (button) => {

      if(button.customId === "ping") {
        await button.deferUpdate();
        const pingg = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
      .setDescription(`Anlık ping: " ${client.ws.ping} ms".`)

msg.edit({
  embeds : [pingg],
  components : []
})
      
      }

  if(button.customId === "uptime") {
    await button.deferUpdate();
    const uptimee = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`Botun çalışma süresi: " **${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** "`) 

msg.edit({
  embeds: [uptimee],
  components : []
})  
    }

 if(button.customId === "iptal_button") {   
    await button.deferUpdate();
    const iptal = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`${message.author} tarafından işlem iptal edildi.`) 

msg.edit({
  embeds: [iptal],
  components : []
})  
    }


  })
  }
};
