const config = require("../../../config.json");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "reboot",
    aliases: ["yenile"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if(message.author.id !== "796263552771817472") return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle geliştiricim olmalısın!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    if (!args[0]) {
      await message.reply({ content: `Başarılı bir şekilde **BOT** yeniden başlatılıyor!`})
      process.exit(0)
    }

  },
};