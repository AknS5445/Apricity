const config = require("../../config.json");
const db = require("quick.db");
const moment = require("moment");
const { MessageEmbed } = require("discord.js")

moment.locale("tr")

module.exports = async message => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    const snipe = {
        icerik: message.content,
        yazar: message.author.id,
        yazilmaTarihi: message.createdTimestamp,
        silinmeTarihi: Date.now(),
    }
    await db.set(`snipe.${message.guild.id}.${message.channel.id}`, snipe)
}

module.exports.conf = {
    name: "messageDelete"
}