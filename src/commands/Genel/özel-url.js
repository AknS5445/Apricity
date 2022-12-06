const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");

module.exports = {
    name: 'özel-url',
    aliases: ["link", "url"],
  
    execute: async (client, message, args, embed, author, channel, guild) => {
if(!message.guild.vanityURLCode) return message.reply({ content:"Bu sunucuda özel url bulunmamakta."});
const url = await message.guild.fetchVanityData();

message.reply({ content: `Sunucu anlık URL'si: **discord.gg/${message.guild.vanityURLCode}**\n\`URL'nin toplam kullanımı: **${url.uses}**`})
},
  };
