const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`- ${config.bot.prefix}avatar [@BoranGkdn/ID]
- ${config.bot.prefix}ban-sorgu [@BoranGkdn/ID]
- ${config.bot.prefix}ceza-bilgi (#CezaID)
- ${config.bot.prefix}isimler [@BoranGkdn/ID]
- ${config.bot.prefix}git [@BoranGkdn/ID]
- ${config.bot.prefix}çek [@BoranGkdn/ID]
- ${config.bot.prefix}öp [@BoranGkdn/ID]
- ${config.bot.prefix}banner [@BoranGkdn/ID]
- ${config.bot.prefix}cihaz-bilgi [@BoranGkdn/ID]
- ${config.bot.prefix}kke [@BoranGkdn/ID]
- ${config.bot.prefix}nerede [@BoranGkdn/ID]
- ${config.bot.prefix}ship [@BoranGkdn/ID]
- ${config.bot.prefix}profil [@BoranGkdn/ID]
- ${config.bot.prefix}rol-bilgi [@Rol/ID]
- ${config.bot.prefix}rol-log [@BoranGkdn/ID]
- ${config.bot.prefix}rol-sorgu [@Rol/ID]
- ${config.bot.prefix}say
- ${config.bot.prefix}sesli
- ${config.bot.prefix}sicil [@BoranGkdn/ID]
- ${config.bot.prefix}snipe
- ${config.bot.prefix}sunucu-bilgi
- ${config.bot.prefix}teyitler
- ${config.bot.prefix}yetkili-bilgi
- ${config.bot.prefix}afk (sebep)
- ${config.bot.prefix}booster (isim)
- ${config.bot.prefix}kayıtsız-etiketle
- ${config.bot.prefix}ping
- ${config.bot.prefix}sil (sayı)
- ${config.bot.prefix}erkek [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}kadın [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}isim [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}kayıtsız
- ${config.bot.prefix}teyit-sıfırla
- ${config.bot.prefix}top-kayıt [@BoranGkdn/ID]
- ${config.bot.prefix}ban [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}chat-mute [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}voice-mute [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}jail [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}reklam [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}warn [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}unban [@BoranGkdn/ID]
- ${config.bot.prefix}unjail [@BoranGkdn/ID]
- ${config.bot.prefix}unmute [@BoranGkdn/ID]
- ${config.bot.prefix}unvmute [@BoranGkdn/ID]
- ${config.bot.prefix}müzisyen [@BoranGkdn/ID]
- ${config.bot.prefix}rol (ver/al) [@BoranGkdn/ID] [@Rol/ID]
- ${config.bot.prefix}sponsor [@BoranGkdn/ID]
- ${config.bot.prefix}vip [@BoranGkdn/ID]
- ${config.bot.prefix}yetkili-yap [@BoranGkdn/ID]
- ${config.bot.prefix}yetkili-say
- ${config.bot.prefix}rol-dm [@Rol/ID]
- ${config.bot.prefix}dm-mesaj [@BoranGkdn/ID] (atılacak-mesaj)
- ${config.bot.prefix}emoji-ekle (emoji)
- ${config.bot.prefix}veri-sıfırla [@BoranGkdn/ID]
- ${config.bot.prefix}eval (kod)
- ${config.bot.prefix}kilit (kapat/aç)
- ${config.bot.prefix}allmute
- ${config.bot.prefix}allunmute
- ${config.bot.prefix}allmove (taşınacak-kanal-id) (taşıyacağınız-kanal-id) [belirtilen kanaldakileri çeker]
- ${config.bot.prefix}herkesi-çek (ses-kanalı-id) [herkesi çeker]
- ${config.bot.prefix}rolsüz (ver)
- ${config.bot.prefix}uptime-süresi
- ${config.bot.prefix}reklam-engel
- ${config.bot.prefix}küfür-engel
- ${config.bot.prefix}yetkili-say
- ${config.bot.prefix}ban-say\`
`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 60000));

    }
}
