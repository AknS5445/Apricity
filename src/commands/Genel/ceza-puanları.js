const config = require("../../../config.json")
const db = require('quick.db');
const moment = require("moment");
const limit = new Map();
moment.locale("tr");

module.exports = {
    name: "ceza-puanları",
    aliases: ["cps", "cp"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        {
            channel.send({
                embeds: [
                    embed.setDescription(
                        `Aşşağıda hangi cezanın kaç puan olduğu belirtilmiştir.\n\n\`BAN\`: ${config.penals.points.banpoints}\n\`JAIL\`: ${config.penals.points.jailpoints}\n\`VOICE MUTE\`: ${config.penals.points.mutepoints}\n\`CHAT MUTE\`: ${config.penals.points.mutepoints}\n\`WARN\`: ${config.penals.points.warnpoints}\n\nBu ceza puanlarını göze alarak sunucu içerisinde haraket etmenizi tavsiye ederiz.`
                    ),
                ],
            });
        }
    },
};
