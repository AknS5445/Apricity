const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../../config.json")
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "erkek",
    aliases: ["e", "boy", "man"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        var name = args[1]
        const age = args[2]
        let erkek = db.get(`erkek_${author.id}`) || 0;
        let kadın = db.get(`kadın_${author.id}`) || 0;
        let toplam = db.get(`toplam_${author.id}`) || 0;
        
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.staff) && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!member) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!name) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir isim belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!age) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir yaş belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (isNaN(age)) return message.reply({ embeds: [embed.setDescription("Öncelikle yaş geçerli rakamlardan oluşsun!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (age < config.registration.minage) return message.reply({ embeds: [embed.setDescription("Kullanıcı için belirtilen yaş minimum yaştan küçük!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (config.registration.purchase) {
            if (!member.username.includes(config.registration.GuilDTag) && !member.roles.cache.has(config.roles.viprole && config.roles.boosterrole && config.roles.musiciansrole && config.roles.designerrole && config.roles.team)) {
                return message.reply({ embeds: [embed.setDescription(`Şuanlık taglı alımdayız! (${config.registration.TagSymbol})`)] });
            }
        }
        await guild.members.cache.get(member.id).setNickname(`${config.registration.TagSymbol} ${name} ${config.registration.symbol} ${age}`);
        db.add(`erkek_${author.id}`, 1)
        db.add(`toplam_${author.id}`, 1)
              const names = db.get(`isimler_${member.id}`)
        db.push(`isimler_${member.id}`, ` \`${config.registration.TagSymbol} ${name} ${config.registration.symbol} ${age}\` (<@&${config.registration.oneman}>)`);
        db.push(`kke_${member.id}`, `${author} yetkilisi tarafından \`${moment(Date.now()).format("LLL")}\` tarihinde (<@&${config.registration.oneman}>) olarak kayıt edilmiş.`)
        await guild.members.cache.get(member.id).roles.add(config.registration.man);
        await guild.members.cache.get(member.id).roles.remove(config.registration.unregistered)
        if (!names) {
            embed.setFooter(`Yetkilinin toplam ${toplam} kayıdı bulunmakta. (${kadın} Kadın, ${erkek} Erkek)`)
            message.reply({ embeds: [embed.setDescription(`${member} kullanıcısı <@&${config.registration.oneman}> olarak kayıt edildi.`)] }).catch((err) => console.log(err), client.ytick(message))
        } else {
            embed.setFooter(`Yetkilinin toplam ${toplam} kayıdı bulunmakta. (${kadın} Kadın, ${erkek} Erkek)`)
            message.reply({ embeds: [embed.setDescription(`${member} kullanıcısı <@&${config.registration.oneman}> olarak kayıt edildi.\n\n Kullanıcının toplamda " ${names.length} " isim kayıtı görüntülendi.\n${names.map((data) => `${data}`).join("\n")}`)] }).catch((err) => console.log(err), client.ytick(message))
        }

        client.channels.cache.get(config.logs.kayıtlog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.registration.oneman}> olarak kayıt edildi.
      
        \`Kullanıcı:\` ${member} - (**${member.id}**)
        \`Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`isim ve Yaşı:\` ${name} | ${age}
        \`Cinsiyet:\` <@&${config.registration.oneman}>     
        \`Kayıt Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });
        client.channels.cache.get(config.channels.chat).send(`${member} aramıza hoş geldin.`).then((e) => setTimeout(() => { e.delete(); }, 30000));
    }
}