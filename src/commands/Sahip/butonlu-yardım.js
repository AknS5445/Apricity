const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "butonlu-yardım",
    aliases: ["butonlu"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
      let button1 = new Discord.MessageButton()
      .setStyle('SUCCESS')
      .setLabel('Kurucu')
      .setCustomId('kurucu')
  
      let button2 = new Discord.MessageButton()
      .setStyle('SUCCESS')
      .setLabel('Üst Yetkili')
      .setCustomId('ustyt')  

      let button3 = new Discord.MessageButton()
      .setStyle('SUCCESS')
      .setLabel('Yetkili')
      .setCustomId('yetkili')  

      let button4 = new Discord.MessageButton()
      .setStyle('SUCCESS')
      .setLabel('Genel')
      .setCustomId('genel')

      let button5 = new Discord.MessageButton()
      .setStyle('SUCCESS')
      .setLabel('Sahip')
      .setCustomId('sahip')
  
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button5, button1, button2, button3, button4)
      
    
  
      message.channel.send({ content:`${config.emojis.tada} Aşşağıda ki butonlara tıklayarak komutlar hakkında bilgi edinebilirsiniz.

**Sahip**: Developer komutlarını öğrenirsiniz.
**Kurucu**: Kurucu komutlarını öğrenirsiniz.
**Üst Yetkili**: Üst Yetkili komutlarını öğrenirsiniz.
**Yetkili**: Yetkili komutlarını öğrenirsiniz.
**Genel**: Herkesin kullanabileceği komutları öğrenirsiniz.
      `, components: [row]  }) ;
  
  
  
  
    }
}
