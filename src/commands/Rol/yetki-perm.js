const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "perm",
    aliases: ["p", "yetki", "yt"],
    execute: async (client, message, args, embed, author, channel) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        const guild = message.guild
        const member =
            message.mentions.members.first() ||
            guild.members.cache.get(args[0]);
        if (!member)
            return message.reply(
                "Öncelikle geçerli bir kullanıcı belirtip tekrar deneyin!"
            );

        const vote = args[1];

        if (!vote)
            return message.reply(
                "Öncelikle geçerli bir yetki belirtin! \n\n\`.yetki <@BoranGkdn/ID> <başlat/çek/cmute/vmute/ban/jail/warn>\`"
            );

        switch (vote) {
            case "başlat": {
                member.roles.add(config.registration.enaltyetkilirolü);
                member.roles.add(config.registration.staff);

                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısının en alt yetkisi başarıyla başlatılmıştır.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından **YETKİLİ** rolleri verildi.` });
                break;
            }

            case "çek": {
                member.roles.remove(config.registration.enaltyetkilirolü);
                member.roles.remove(config.registration.staff);

                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısından en alt yetkili rolleri başarıyla alınmıştır..`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından **YETKİLİ** rolleri alındı.` });
                break;
            }

            case "cmute": {
                member.roles.add(config.penals.mute.staff);
                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısına \`CHAT MUTE\` yetkisi verildi.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından \`CHAT MUTE\` rolleri verildi.` });
                break;
            }

            case "vmute": {
                member.roles.add(config.penals.vmute.staff);
                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısına \`VOICE MUTE\` yetkisi verildi.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından \`VOICE MUTE\` rolleri verildi.` });
                break;
            }

            case "ban": {
                member.roles.add(config.penals.ban.staff);
                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısına \`BAN\` yetkisi verildi.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından \`BAN\` rolleri verildi.` });
                break;
            }

            case "jail": {
                member.roles.add(config.penals.jail.staff);
                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısına \`JAIL\` yetkisi verildi.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından \`JAIL\` rolleri verildi.` });
                break;
            }

            case "warn": {
                member.roles.add(config.penals.warn.staff);
                channel.send({
                    embeds: [
                        embed.setDescription(
                            `${member} kullanıcısına \`WARN STAFF\` yetkisi verildi.`
                        ),
                    ],
                });
                client.channels.cache.get(config.logs.rollog).send({ content: `${member} - \`(${member.id})\` kullanıcısına \`(${message.author.id})\` tarafından \`WARN STAFF\` rolleri verildi.` });
                break;
            }
        
        }
    }
} 

