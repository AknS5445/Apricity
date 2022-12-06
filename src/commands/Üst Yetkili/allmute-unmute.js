const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "allmute",
    aliases: ["allunmute", "all-mute", "herkesi-sustur", "muteall", "all-unmute", "susturma-kaldır"],
    execute: async (client, message, args, embed, author) => {
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const ownerr = client.users.cache.get("796263552771817472");
    let channel = message.guild.channels.cache.get(args[0]) || message.member.voice.channel;
    if (!channel) return message.channel.send({ content:"Öncelikle bir kanal ID belirtmeli ya da bir sesli kanalda bulunmalısınız."}).then((e) => setTimeout(() => { e.delete(); }, 5000));

    var Sustur = new MessageButton()
    .setLabel("Kullanıcıları Sustur")
    .setCustomId("sustur")
    .setStyle("SECONDARY")
    .setEmoji('863716120074256384')


    var Ac = new MessageButton()
    .setLabel("Susturmayı Kaldır")
    .setCustomId("susturma_ac")
    .setStyle("SECONDARY")
    .setEmoji('863716120074256384')

    var Iptal = new MessageButton()
    .setLabel("İşlemi İptal Et!")
    .setCustomId("iptal_button")
    .setStyle("DANGER")
    .setEmoji(config.emojis.no)

    const row = new MessageActionRow()
    .addComponents([Sustur, Ac, Iptal])


embed.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) }).setColor("BLACK").setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setThumbnail(message.guild.iconURL({ dynamic: true }))
embed.addField(`KANALDAKİLERİ SUSTURMA İŞLEMLERİ!`,`

**Kullanıcıları Sustur** kanaldaki tüm kullanıcıları susturmaya yarar.
**Susturmayı Kaldır** kanaldaki kullanıcıların susturmasını kaldırır.

İstediğiniz butona tıklayıp kullanıcıların üstünde uygulayabilirsiniz, işlemi iptal et butonuna basarak işlemi iptal edebilirsiniz.
`)

    let msg = await message.channel.send({ embeds: [embed], components: [row] });
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })
    collector.on("collect", async (button) => {

      if(button.customId === "sustur") {
        await button.deferUpdate();
        channel.members.filter((x) => !x.permissions.has("ADMINISTRATOR"))
        .forEach((x, index) => {
          client.wait(index * 1000);
          x.voice.setMute(true);
        });
        const sustur = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
      .setDescription(`🔇 \`${channel.name}\` kanalındaki tüm kullanıcılar susturuldu, biraz bekleyiniz.`)

msg.edit({
  embeds : [sustur],
  components : []
})
      
      }

  if(button.customId === "susturma_ac") {
    await button.deferUpdate();
    channel.members.filter((x) => !x.permissions.has("ADMINISTRATOR"))
    .forEach((x, index) => {
      client.wait(index * 1000);
      x.voice.setMute(false);
    });
    const ac = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`🔉 \`${channel.name}\` kanalındaki tüm kullanıcıların susturulması kaldırıldı, iyi sohbetler!`) 

msg.edit({
  embeds: [ac],
  components : []
})  
    }

 if(button.customId === "iptal_button") {   
    await button.deferUpdate();
    const iptal = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`${message.author} tarafından kanal kilitleme işlemi iptal edildi.`) 

msg.edit({
  embeds: [iptal],
  components : []
})  
    }


  })
  }
};
