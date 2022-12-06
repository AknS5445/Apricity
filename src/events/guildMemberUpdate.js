const db = require("quick.db");
const moment = require("moment");
const config = require("../../config.json");
const Discord = require('discord.js');
moment.locale("tr");

module.exports = async (oldMember, newMember) => {
    const entry = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE' }).then(audit => audit.entries.first());
    const author = entry.executor
    if (author.bot) return;
    const embed = new Discord.MessageEmbed()
    const role = oldMember.roles.cache.find(s => !newMember.roles.cache.has(s.id)) || newMember.roles.cache.find(s => !oldMember.roles.cache.has(s.id))
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        db.push(`rolelog_${newMember.id}`, `\`${moment(Date.now()).format("LLL")} Ekleme\` ${author}: ${role}`)
        client.channels.cache.get(config.logs.rolloger).send({ embeds: [embed.setDescription(`<@${newMember.id}> kullanıcısına ${author} tarafından ${role} rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` <@${newMember.id}>
        \`Rolü Veren Yetkili:\` ${author} 
        \`Verilen Rol:\` ${role}    
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] }); 
    } else {
        db.push(`rolelog_${newMember.id}`, `\`${moment(Date.now()).format("LLL")} Kaldırma\` ${author}: ${role}`)
        client.channels.cache.get(config.logs.rolloger).send({ embeds: [embed.setDescription(`<@${newMember.id}> kullanıcısından ${author} tarafından ${role} rolü alındı.
      
        \`Rolü Alınan  Kullanıcı:\` <@${newMember.id}>
        \`Rolü Alan Yetkili:\` ${author} 
        \`Alınan Rol:\` ${role}    
        \`Rol Alınma Tarihi:\` ${moment(Date.now()).format("LLL")}`)] }); 
    }
}

module.exports.conf = {
    name: "guildMemberUpdate"
}