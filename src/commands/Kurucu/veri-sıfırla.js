const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "veri-sıfırla",
    aliases: ["sıfırla"],
    execute: async (client, message, args, embed, author, channel) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const ownerr = client.users.cache.get("796263552771817472");

    var DeletePenalty = new MessageButton()
    .setLabel("Teyitlerini Sıfırla")
    .setCustomId("cezapuan_sıfırla")
    .setStyle("SUCCESS")
    .setEmoji(config.emojis.yes)


    var DeleteName = new MessageButton()
    .setLabel("İsimlerini Sıfırla")
    .setCustomId("isim_sıfırla")
    .setStyle("SUCCESS")
    .setEmoji(config.emojis.yes)

    var DeletePenal = new MessageButton()
    .setLabel("Sicilini Sıfırla")
    .setCustomId("sicil_sıfırla")
    .setStyle("SUCCESS")
    .setEmoji(config.emojis.yes)

    var Iptal = new MessageButton()
    .setLabel("İşlemi İptal Et!")
    .setCustomId("iptal_button")
    .setStyle("DANGER")
    .setEmoji(config.emojis.no)

    const row = new MessageActionRow()
    .addComponents([DeleteName, DeletePenalty, DeletePenal, Iptal])


embed.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) }).setColor("BLACK").setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setThumbnail(message.guild.iconURL({ dynamic: true }))
embed.addField(`VERİ SIFIRLAMA İŞLEMLERİ!`,`
Teyitlerini Sıfırlama işlemi yetkilinizin teyitlerini sıfırlar.
İsimleri Sıfırlama işlemi kullanıcının isimlerini sıfırlar.
Sicilini Sıfırlama işlemi kullanıcının sicilini sıfırlar.

Evet, şimdi ${member.toString()} kullanıcısının hangi verisini sıfırlamak istiyorsanız butonlar ile etkileşime geçiniz.

\`\`\`NOT: Bu işlem geri alınamaz!!\`\`\`
`)

    let msg = await message.channel.send({ embeds: [embed], components: [row] });
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })
    collector.on("collect", async (button) => {

      if(button.customId === "isim_sıfırla") {
        await button.deferUpdate();
        let isimler = db.delete(`isimler_${member.id}`) || [];
        const isim = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
      .setDescription(`${member.toString()} kullanıcısının isim geçmişi ${message.author} tarafından temizlendi!`)

msg.edit({
  embeds : [isim],
  components : []
})
      
      }

  if(button.customId === "cezapuan_sıfırla") {
    await button.deferUpdate();
    let erkek = db.delete(`erkek_${member.id}`) || [];
    let kadın = db.delete(`kadın_${member.id}`) || [];
    let toplam = db.delete(`toplam_${member.id}`) || [];
    const cezapuan = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`${member.toString()} kullanıcısının teyit geçmişi ${message.author} tarafından başarıyla temizlendi.`) 

msg.edit({
  embeds: [cezapuan],
  components : []
})  
    }
 if(button.customId === "sicil_sıfırla") {   
    await button.deferUpdate();
    let sicil = db.delete(`sicil_${member.id}`) || [];
    const teyit = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`${member.toString()} kullanıcısının sicil geçmişi ${message.author} tarafından başarıyla temizlendi.`) 

msg.edit({
  embeds: [teyit],
  components : []
})  
    }

 if(button.customId === "iptal_button") {   
    await button.deferUpdate();
    const iptal = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: ownerr.avatarURL({ dynamic: true, size: 2048 })})
    .setDescription(`${member} kullanıcısının verilerini sıfırlama işlemi ${message.author} tarafından iptal edildi.`) 

msg.edit({
  embeds: [iptal],
  components : []
})  
    }


  })
  }
};
