const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../../../config.json")


module.exports = {
    name: "reklam-engel",
    aliases: ["reklamengel", "reklam-koruma", "reklamkoruma"],
    execute: async (client, message, args, embed, author, channel, guild) => {


       if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));

    if (!args[0] || !["ayarla", "log"].includes(args[0])){
        message.reply({ embeds: [embed.setDescription(`
\`\`\`REKLAM KORUMASI SİSTEMİ!\`\`\`       
Reklam korumasını açıp/kapatmak için: **${config.bot.prefix}reklam-engel ayarla**
Reklam koruması log kanalını belirlemek için: **${config.bot.prefix}reklam-engel log #kanal**`)] });
      }
  
  if(args[0] === "ayarla"){
     let reklam = db.fetch(`reklam.${message.guild.id}.durum`);
    if (reklam) {
      db.delete(`reklam.${message.guild.id}`);
      message.reply({ embeds: [embed.setDescription(`Başarıyla reklam koruması kapatıldı.`)] });
    } else {
      db.set(`reklam.${message.guild.id}.durum`, true);
      message.reply({ embeds: [embed.setDescription(`Başarıyla reklam koruması açıldı.`)] });
        
    }
  };

   if(args[0] === "log"){
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`);
    message.reply({ embeds: [embed.setDescription(`Öncelikle geçerli bir kanal etiketlemelisin.`)] });
    if (reklam) {
      let kanal = message.mentions.channels.first();
      if (!kanal) return message.channel.send({ embeds: [member]});
      db.set(`reklam.${message.guild.id}.kanal`, kanal.id);
      message.reply({ embeds: [embed.setDescription(`Başarıyla reklam log kanalı ayarlandı.`)] });
        
    } else {
        message.reply({ embeds: [embed.setDescription(`Reklam koruması açık değil.`)] });
        
      } }

}}