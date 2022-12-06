const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "etkinlik-seçim",
    aliases: ["etkinlik"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🎁')
          .setLabel('Çekiliş Katılımcısı')
          .setCustomId('cekilis')
  
          let button2 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🎉')
          .setLabel('Etkinlik Katılımcısı')
          .setCustomId('etkinlik')
  

          let button3 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('🏆')
          .setLabel('Turnuva Katılımcısı')
          .setCustomId('turnuva')
  
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1, button2, button3)
      
    
  
      message.channel.send({ content:`Selamlar herkese, sunucumuz da sizleri rahatsız etmemek için \`@everyone\` ve \`@here\` kullanılmamaktadır fakat yine de bildirimlerden haberdar olmak isterseniz aşşağıdan etkinlik seçim rollerinizi alabilirsiniz.
  
<@&${config.buttons.giveaway}> :  Birbirinden güzel çekilişlerimizden haberdar olursunuz.
  
<@&${config.buttons.activity}> : Etkinlik bildirimlerinden haberdar olursunuz.

<@&${config.buttons.turnuva}> : Turnuva bildirimlerinden haberdar olursunuz.

**Çekiliş Katılımcısı** rolü için : 🎁 Çekiliş Katılımcısı butonuna basınız.
**Etkinlik Duyuru** rolü için : 🎉 Etkinlik Katılımcısı butonuna basınız.
**Turnuva Katılımcısı** rolü için : 🏆 Turnuva Katılımcısı butonuna basınız.
  
      `, components: [row]  }) ;
  
  
  
  
    }
}
