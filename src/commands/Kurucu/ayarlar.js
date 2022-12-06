const { MessageEmbed } = require("discord.js");
const ms = require('ms');
const Discord = require('discord.js');
const db = require('quick.db');
const config = require("../../../config.json")
const limit = new Map();
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "ayarlar",
    aliases: ["ayar", "sunucu-ayar", "sunucuayar", "sunucuayarları"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (
            message.member.permissions.has("ADMINISTRATOR") ||
            config.Guild.GuildOwnerRole.some((role) =>
                message.member.roles.cache.has(role)
            )
        ) {
            function ortalama(arr) {
                let average = 0;
                arr.forEach((x) => (average += x));
                return Math.floor(average / arr.length);
            }
            const guild = message.guild
            let members = guild.members.cache;
            let genel = members
            channel.send({
                embeds: [
                    embed.setDescription(`**${guild.name}** Sunucusunun bilgileri;
            
            **Erkek Rolleri:** ${
                config.registration.man.map((bg) => `<@&${bg}>`).join(
                    ", "
                ) || "Belirtilmemiş."
            },
            **Kadın Rolleri:** ${
                config.registration.woman.map((bg) => `<@&${bg}>`).join(
                    ", "
                ) || "Belirtilmemiş."
            },
            **Kayıt Yetkilisi:** ${
                config.registration.staff
                    ? `<@&${config.registration.staff}>`
                    : "Belirtilmemiş."
            },
            **Sunucu Tagı:** ${config.registration.GuilDTag},
            **Sunucu Etiket:** ${config.registration.GuildDiscrim},
            **Taglı Rolü:** <@&${config.roles.team}>,
            **Ban Yetkilisi:** ${
                config.penals.ban.staff},
           **Ban log:** ${
               guild.channels.cache.get(config.penals.ban.log) || "Belirtilmemiş."
           },
            **Jail yetkilisi:** ${
                config.penals.jail.staff},
            **Jail rolü:** ${
                config.penals.jail.roles
                    ? `<@&${config.penals.jail.roles}>`
                    : "Belirtilmemiş."
            },
            **Jail log:** ${
                guild.channels.cache.get(config.penals.jail.log) ||
                "Belirtilmemiş."
            },
            **Mute Yetkilisi:** ${
                config.penals.mute.staff},
            **Mute log:** ${
                guild.channels.cache.get(config.penals.mute.log) ||
                "Belirtilmemiş."
            },
            **Mute Rolü:** <@&${config.penals.mute.roles}>,
            **Voice Mute Yetkilisi:** ${config.penals.voicemute.staff},
            **Voice Mute Log:** ${
                guild.channels.cache.get(config.penals.voicemute.log) ||
                "Belirtilmemiş."
            },
            **Uyarı Yetkilisi:** ${
                config.penals.warn.staff},
            **Uyarı Log:** ${
                guild.channels.cache.get(config.penals.warn.log) ||
                "Belirtilmemiş."
            },
            **Hoş geldin Mesaj Kanalı:** ${
                guild.channels.cache.get(config.channels.welcomechannel) ||
                "Belirtilmemiş."
            },
            **Kurallar Kanalı:** ${
                guild.channels.cache.get(config.channels.rules) ||
                "Belirtilmemiş."
            },
            **Chat Kanalı:** ${
                guild.channels.cache.get(config.channels.chat) ||
                "Belirtilmemiş."
            },
            **Minimum Kayıt Yaşı:** ${
                config.registration.minage || "Belirtilmemiş."
            },
            **Vip Rolü:** ${
                config.roles.vip ? `<@&${config.roles.vip}>` : "Belirtilmemiş."
            },
            **Designer Rolü:** ${
                config.roles.designer
                    ? `<@&${config.roles.designer}>`
                    : "Belirtilmemiş."
            },
            **Müzisyen Rolü:** ${
                config.roles.müzisyen
                    ? `<@&${config.roles.müzisyen}>`
                    : "Belirtilmemiş."
            },
            **Mesaj Log:** ${
                guild.channels.cache.get(config.logs.messagelog) ||
                "Belirtilmemiş."
            },
            **Ses Log:** ${
                guild.channels.cache.get(config.logs.seslog) ||
                "Belirtilmemiş."
            },
            **Tag Log:** ${
                guild.channels.cache.get(config.logs.taglog) || "Belirtilmemiş."
            },
            **Ban Ceza Puanı:** ${
                Number(config.penals.points.banpoints) || "Belirtilmemiş."
            },
            **Jail Ceza Puanı:** ${
                Number(config.penals.points.jailpoints) || "Belirtilmemiş."
            },
            **Mute Ceza Puanı:** ${
                Number(config.penals.points.mutepoints) || "Belirtilmemiş."
            },
            **Timeout Ceza Puanı:** ${
                Number(config.penals.points.timoutpoints) || "Belirtilmemiş."
            },
            **Voice Mute Ceza Puanı:** ${
                Number(config.penals.points.mutepoints) || "Belirtilmemiş."
            },
            **Uyarı Ceza Puanı:** ${
                Number(config.penals.points.warnpoints) || "Belirtilmemiş."
            },
            **Sunucu Owner Rolleri:** ${
                config.Guild.GuildOwnerRole.map((bg) => `<@&${bg}>`).join(
                    ", "
                ) || "Belirtilmemiş."
            }`),
                ],
            });
        }
    },
};
