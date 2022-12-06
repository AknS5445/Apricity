const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json");

module.exports = {
    name: "küfür-engel",
    aliases: ["küfürengel", "küfür-koruma", "küfürkoruma", "küfür-koruması"],
    execute: async (client, message, args, embed, author, channel, guild) => {
 if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));

    if (!args[0] || !["aç", "kapat"].includes(args[0])){
      message.reply({ embeds: [embed.setDescription(`
\`\`\`KÜFÜR/ARGO KELİME KORUMASI SİSTEMİ!\`\`\`    
Küfür/argo kelime korumasını açmak için: **${config.bot.prefix}küfür-engel aç** 
Küfür/argo kelime kapatmak için: **${config.bot.prefix}küfür-engel kapat**
Belirli bir kanalda küfür engeli açmak için: **${config.bot.prefix}küfür-engel aç #kanal**
Belirli bir kanalda küfür engeli kapatmak için: **${config.bot.prefix}küfür-engel kapat #kanal**`)] });
      }
  
  if(args[0] === "aç"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.set("cd2."+cc.id+message.guild.id, "Kanal")
      message.reply({ embeds: [embed.setDescription("**<#"+cc.id+">** adlı kanalda küfür/argo koruma sistemi açıldı.")] });
    } else {
      db.set("cd1."+message.guild.id, "Sunucu")
      message.reply({ embeds: [embed.setDescription(`Başarıyla küfür/argo koruma sistemi açıldı.`)] });
    }
  }
  
   if(args[0] === "kapat"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.delete("cd2."+cc.id+message.guild.id)
      message.reply({ embeds: [embed.setDescription("**<#"+cc.id+">** adlı kanalda küfür/argo koruma sistemi kapatıldı.")] });
    } else {
      db.delete("cd1."+message.guild.id)
      message.reply({ embeds: [embed.setDescription(`Başarıyla küfür/argo koruma sistemi kapatıldı.`)] });
    }
  }
}}