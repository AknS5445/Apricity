const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "kontrol",
    aliases: ["tara", "tarat", "tag-tara", "tt", "tagtara"],
    execute: async (client, message, args, embed, author, channel) => {

        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
       let guild = client.guilds.cache.get(config.Guild.GuildID);
       await guild.members.fetch();

       const etkinlik = await client.guilds.cache.get(config.Guild.GuildID).roles.cache.find(x => x.name.includes(config.buttons.activity))
       const cekilis = await client.guilds.cache.get(config.Guild.GuildID).roles.cache.find(x => x.name.includes(config.buttons.giveaway))
       
    let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(config.registration.GuilDTag) && !s.roles.cache.get(config.roles.team))
    let et = message.guild.members.cache.filter(member => !member.roles.cache.has(cekilis) || !member.roles.cache.has(etkinlik)).size;
    let borangkdn = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

const row = new MessageActionRow()
.addComponents(
new MessageButton().setStyle('SUCCESS').setLabel('Taglı Rolü Dağıt.').setCustomId('tagrol'),
new MessageButton().setStyle('PRIMARY').setLabel('Kayıtsız Rolü Dağıt.').setCustomId('kayıtsızdagit'),
);

let bg = new MessageEmbed()
.setDescription(`
${message.member.toString()}, selam! \`${message.guild.name}\` sunucusunda rolü olmayan kullanıcılara rol dağıtma menüsü aşşağıda gösterilmiştir, iyi kullanımlar.

\`\`\`NOT: Bu işlem geri alınamaz.\`\`\`
`)

.addFields(
{ name: "**Taglı Rolü Olmayanlar!**", value: `
\`\`\`md
${taglilar.size} üye.
\`\`\`
`, inline: true },
{ name: "**Kayıtsız Rolü Olmayanlar!**", value: `
\`\`\`md
${borangkdn.size} üye.
\`\`\`
`, inline: true }
)

.setColor("GREEN")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 
 
  let msg = await message.channel.send({ embeds: [bg], components: [row]})
 
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })

      collector.on("collect", async (button) => {

    if (button.customId === 'ecdagit') {
 
    let bg = message.guild.members.cache.filter(member => !member.roles.cache.has(etkinlik) || !member.roles.cache.has(cekilis))
    button.reply({ content:`
Etkinlik/Çekiliş rolü olmayan ${bg.size} kullanıcıya etkinlik, çekiliş rolleri verildi !`})
        message.guild.members.cache.filter(member => !member.roles.cache.has(etkinlik) || !member.roles.cache.has(cekilis)).map(x=> x.roles.add([etkinlik, cekilis]));
    }


    if (button.customId === 'tagrol') {
 
      let rol = config.roles.team
      let tag = config.registration.GuilDTag
      let tag2 = config.registration.GuilDTag2
      let tag3 = config.registration.GuilDTag3
      let tag4 = config.registration.GuilDTag4
      let etiket = config.registration.GuildDiscrim 
      let taglılar = message.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag3) && s.user.username.includes(tag2) && s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))

    button.reply({ content:`
Sunucumuzda tagı olup rolü olmayan **${taglılar.size}** kullanıcıya taglı rolü verildi.`})

    message.guild.members.cache.filter(s => s.user.username.includes(config.registration.GuilDTag) && !s.roles.cache.has(config.roles.team)).map(x=> x.roles.add(config.roles.team))                
    }

    if (button.customId === 'kayıtsızdagit') {
 
    let bgg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

    button.reply({ content:`
Sunucumuzda olup kayıtsız rolü olmayan **${bgg.size}** kullanıcıya başarıyla kayıtsız rolü verildi.`})

    message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0).map(x=> x.roles.add(config.registration.unregistered))

    }

  });
}
}
