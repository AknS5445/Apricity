const { Client, Collection, Intents } = require("discord.js");
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
const dotenv = require("dotenv");
dotenv.config();
const Discord = require('discord.js');
const { readdir } = require("fs");
require("moment-duration-format");
const moment = require("moment");
moment.locale("tr");
const config = require("./config");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`[BORANGKDN-COMMAND] ${prop.name} yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});

readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`[BORANGKDN-EVENT] ${prop.conf.name} yüklendi!`);
  });
});

client.login(config.bot.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));

  client.on("interactionCreate",async (interaction, message) => {

    if(interaction.isButton()) {

      if(interaction.customId === "etkinlik") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.activity)) {
          await member.roles.remove(config.buttons.activity);
          await interaction.reply({ content: `<@&${config.buttons.activity}> rolü başarıyla üzerinizden alındı!`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.activity);
          await interaction.reply({ content: `<@&${config.buttons.activity}> rolü başarıyla üzerinize eklendi!`, ephemeral: true });
        };
      };
      
      
      if(interaction.customId === "cekilis") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.giveaway)) {
          await member.roles.remove(config.buttons.giveaway);
          await interaction.reply({ content: `<@&${config.buttons.giveaway}> rolü başarıyla üzerinizden alındı!`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.giveaway);
          await interaction.reply({ content: `<@&${config.buttons.giveaway}> rolü başarıyla üzerinize eklendi!`, ephemeral: true });
        };
      };

      if(interaction.customId === "turnuva") {
        let member = interaction.member
        if(member.roles.cache.has(config.buttons.turnuva)) {
          await member.roles.remove(config.buttons.turnuva);
          await interaction.reply({ content: `<@&${config.buttons.turnuva}> rolü başarıyla üzerinizden alındı!`, ephemeral: true });
        } else {
          await member.roles.add(config.buttons.turnuva);
          await interaction.reply({ content: `<@&${config.buttons.turnuva}> rolü başarıyla üzerinize eklendi!`, ephemeral: true });
        };
      };

    }})
//-------------------------------------------------------------------------------------------------------------\\

client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isButton()) {

    if(interaction.customId === "sahip") {
      let member = interaction.member
   {
        await interaction.reply({ content: `\`\`\`
- ${config.bot.prefix}eval (kod)
- ${config.bot.prefix}ping
- ${config.bot.prefix}uptime-süresi
- ${config.bot.prefix}reload\`\`\``, ephemeral: true });
      };
    };
    
    if(interaction.customId === "kurucu") {
      let member = interaction.member
   {
        await interaction.reply({ content: `\`\`\`
- ${config.bot.prefix}yetkili-say
- ${config.bot.prefix}rol-dm [@Rol/ID]
- ${config.bot.prefix}dm-mesaj [@BoranGkdn/ID] (atılacak-mesaj)
- ${config.bot.prefix}emoji-ekle (emoji)
- ${config.bot.prefix}veri-sıfırla [@BoranGkdn/ID]
- ${config.bot.prefix}herkesi-çek (ses-kanalı-id) [herkesi çeker]
- ${config.bot.prefix}rolsüz
- ${config.bot.prefix}ban-say
- ${config.bot.prefix}teyit-sıfırla
- ${config.bot.prefix}sicil-sıfırla
- ${config.bot.prefix}isimler-sıfırla
- ${config.bot.prefix}yetkili-bilgi
- ${config.bot.prefix}sunucu-bilgi
- ${config.bot.prefix}rol-sorgu [@Rol/ID]
- ${config.bot.prefix}rol-bilgi [@Rol/ID]
\`\`\``, ephemeral: true });
      };
    };
    
    
    if(interaction.customId === "ustyt") {
      let member = interaction.member
   {
        await interaction.reply({ content: `\`\`\`
- ${config.bot.prefix}ceza-bilgi (#CezaID)
- ${config.bot.prefix}allmute
- ${config.bot.prefix}allunmute
- ${config.bot.prefix}allmove (taşınacak-kanal-id) (taşıyacağınız-kanal-id) [belirtilen kanaldakileri çeker]
- ${config.bot.prefix}müzisyen [@BoranGkdn/ID]
- ${config.bot.prefix}sponsor [@BoranGkdn/ID]
- ${config.bot.prefix}vip [@BoranGkdn/ID]
- ${config.bot.prefix}yetkili-yap [@BoranGkdn/ID]
- ${config.bot.prefix}rol (ver/al) [@BoranGkdn/ID] [@Rol/ID]
- ${config.bot.prefix}kilit
- ${config.bot.prefix}kontrol
- ${config.bot.prefix}sil (sayı)
- ${config.bot.prefix}kayıtsız-etiketle
- ${config.bot.prefix}say
- ${config.bot.prefix}sesli
- ${config.bot.prefix}sicil [@BoranGkdn/ID]
- ${config.bot.prefix}rol-log [@BoranGkdn/ID]
- ${config.bot.prefix}kke [@BoranGkdn/ID]
- ${config.bot.prefix}nerede [@BoranGkdn/ID]
- ${config.bot.prefix}cihaz-bilgi [@BoranGkdn/ID]
- ${config.bot.prefix}ban-sorgu [@BoranGkdn/ID]
\`\`\``, ephemeral: true });
      };
    };

    if(interaction.customId === "yetkili") {
      let member = interaction.member
   {
        await interaction.reply({ content: `\`\`\`
- ${config.bot.prefix}ban [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}chat-mute [@BoranGkdn/ID] (süre) (sebep)
- ${config.bot.prefix}voice-mute [@BoranGkdn/ID] (süre) (sebep)
- ${config.bot.prefix}jail [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}reklam [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}warn [@BoranGkdn/ID] (sebep)
- ${config.bot.prefix}unban [@BoranGkdn/ID]
- ${config.bot.prefix}unjail [@BoranGkdn/ID]
- ${config.bot.prefix}unmute [@BoranGkdn/ID]
- ${config.bot.prefix}unvmute [@BoranGkdn/ID]
- ${config.bot.prefix}erkek [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}kadın [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}isim [@BoranGkdn/ID] (isim-yaş)
- ${config.bot.prefix}kayıtsız
- ${config.bot.prefix}isimler [@BoranGkdn/ID]
- ${config.bot.prefix}kayıt-sayı
- ${config.bot.prefix}top-kayıt [@BoranGkdn/ID]\`\`\``, ephemeral: true });
      };
    };

    if(interaction.customId === "genel") {
      let member = interaction.member
   {
        await interaction.reply({ content: `\`\`\`
- ${config.bot.prefix}afk (sebep)
- ${config.bot.prefix}zengin (isim)
- ${config.bot.prefix}ship [@BoranGkdn/ID]
- ${config.bot.prefix}profil [@BoranGkdn/ID]
- ${config.bot.prefix}snipe
- ${config.bot.prefix}avatar [@BoranGkdn/ID]
- ${config.bot.prefix}git [@BoranGkdn/ID]
- ${config.bot.prefix}çek [@BoranGkdn/ID]
- ${config.bot.prefix}öp [@BoranGkdn/ID]
- ${config.bot.prefix}banner [@BoranGkdn/ID]
- ${config.bot.prefix}yardım\`\`\``, ephemeral: true });
      };
    };

  }})

//-------------------------------------------------------------------------------------------------------------\\

    client.on('messageCreate', async message => {
      const cdb = require("quick.db")
      const author = message.author
      if(message.guild){
        const data1 = cdb.get("cd1."+message.guild.id)
        const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
        
        if(data1){
        const blacklist = ["Oç", "Siktir", "Amcık", "Sikim", "Sikiyim", "Ananıskm", "Anan", "oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq","orospucocu","awk","anan","annen","anneni"];
      
        let content = message.content.split(' ');
        
        content.forEach(kelime => {
        if(blacklist.some(küfür => küfür === kelime))  {
        if(!message.member.permissions.has('BAN_MEMBERS')){
          message.delete({ timeout: 3000 });
          message.channel.send({content: `${author} sunucumuzda küfür edemezsin.` }).catch(e => {})
        message.delete().catch(e => {})
        }
        }
        })
        }
      
        if(!data1 && data2){
        const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
      
        let content = message.content.split(' ');
        
        content.forEach(kelime => {
        if(blacklist.some(küfür => küfür === kelime))  {
        if(!message.member.permissions.has('BAN_MEMBERS')){
          message.delete({ timeout: 3000 });
          message.channel.send({content: `${author} sunucumuzda küfür edemezsin.` }).catch(e => {})
        message.delete().catch(e => {})
        }
        }
        })
        }
        
      }
        });
    
    
    let cdb = require("quick.db");
    const reklam = [
      ".com",	".net",".xyz",".tk",".pw",".io",".me",".gg","www.",	"https","http",".gl",".org",".com.tr",
      ".biz","net",".rf",".gd",".az",".party",".gf"
     ];
      client.on("messageUpdate", async (old, nev) => {
      if(!old.guild) return;
      if (old.content != nev.content) {
        let i = await cdb.fetch(`reklam.${nev.member.guild.id}.durum`);
        let y = await cdb.fetch(`reklam.${nev.member.guild.id}.kanal`);
        if (i) {
        if (reklam.some(word => nev.content.includes(word))) {
        if (nev.member.permissions.has("BAN_MEMBERS")) return;
    
          const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(
            `${nev.author}, kullanıcısı mesajını editleyerek reklam yapmaya çalıştı.`
          )
          .addField("Reklam Mesajı:", nev.content)
          .addField("Reklam Yapılan Kanal:", nev.channel.name, true);
          message.delete({ timeout: 3000 });
          message.channel.send({content: `${author} mesajını editleyerek reklam yapamazsın.` }).catch(e => {})
          message.delete().catch(e => {}) 
        }
        } else {
        }
        if (!i) return;
      }
      });
      
      client.on("messageCreate", async msg => {
      if(!msg.guild) return;
      if (msg.author.bot) return;
      if (msg.channel.type === "dm") return;
      let y = await cdb.fetch(`reklam.${msg.member.guild.id}.kanal`);
      
      let i = await cdb.fetch(`reklam.${msg.member.guild.id}.durum`);
      if (i) {
        if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
        try {
          if (!msg.member.permissions.has("MANAGE_GUILD")) {
          msg.delete({ timeout: 3000 });
          msg.channel.send({content: `${author} sunucumuzda reklam yapamazsın.` }).catch(e => {})
          message.delete().catch(e => {})
          const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`${msg.author} kullanıcısı sunucumuzda reklam yapmaya çalıştı.`)
            .addField("Reklam Mesajı:", msg.content)
            .addField("Reklam Yapılan Kanal", msg.channel.name, true);
          client.channels.cache.get(y).send({ embeds: [embed]});
          }
        } catch (err) {
          console.log(err);
        }
        }
      }
      if (!i) return;
      });

      //-------------------------------------------------------------------------------------------------------------\\

      client.on("messageDelete", message => {
          if (!message || message.partial) return
          if (typeof message.author === "undefined" ) return
          if (message.author && message.author.bot === true) return
          if (message.channel && message.channel.type !== "GUILD_TEXT") return
          const author = message.author
          const channel2 = client.channels.cache.get(config.logs.messagelog)
          const messageDeletedEmbed = new Discord.MessageEmbed()
              .setColor("BLACK")
              .setTimestamp()
              .setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })})
              let user = message.author
              let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
          var messageHadAttachment = message.attachments.map(x => x.proxyURL)[0]
          if (messageHadAttachment) { // if there is an attachement
              messageDeletedEmbed.setDescription(`<@${message.author.id}> kullanıcısı <#${message.channel.id}> kanalında bir resimli mesaj sildi. 

Silinen Resimin Link'i: ${message.attachments.map(x => x.proxyURL)}
      
\`\`\`Silinen Kanal: ${message.channel.name} - (${message.channel.id})
Silen Kullanıcı: ${message.author.tag} - (${message.author.id})
Mesaj ID: ${message.id}
Mesajın Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')} \`\`\``)
               }
              else {      
                messageDeletedEmbed.setDescription(`<@${message.author.id}> kullanıcısı <#${message.channel.id}> kanalında bir mesaj sildi. 

Silinen Mesaj: **${message.content.replace(/`/g, "'")}**
                      
\`\`\`Silinen Kanal: ${message.channel.name} - (${message.channel.id})
Silen Kullanıcı: ${message.author.tag} - (${message.author.id})
Mesaj ID: ${message.id}
Mesajın Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')} \`\`\``)
              }
              if(avatar.endsWith(".gif?size=1024")){
                messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))
              } else {
                messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
              }
           return channel2.send({ 
             embeds: [messageDeletedEmbed]
             }) 
        });
    
    
    
    
        client.on("messageUpdate", (oldMessage, newMessage) => {
            if (oldMessage.author.bot === true) return
            if (oldMessage.channel.type !== "GUILD_TEXT") return
            if (newMessage.channel.type !== "GUILD_TEXT") return
            if (oldMessage.content === newMessage.content) return
          const messageEditedEmbed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setTimestamp()
          .setAuthor({name: "Bir Mesaj Düzenlendi!"})
          .setDescription(` <@${newMessage.author.id}> kullanıcısı <#${newMessage.channel.id}> kanalında bir mesaj düzenledi. 
          
Mesajın Düzenlenmemiş Hali: **${oldMessage.content.replace(/`/g, "'")}**
          
Mesajın Düzenlendikten Sonra ki Hali: **${newMessage.content.replace(/`/g, "'")}**
          
\`\`\`Mesajın Düzenlendiği Kanal: ${newMessage.channel.name} - (${newMessage.channel.id})
Düzenleyen Kullanıcı: ${newMessage.author.tag} - (${newMessage.author.id})
Mesaj ID: ${newMessage.id}
Mesajın Atılma Tarihi: ${moment(oldMessage.createdAt).locale("tr").format('LLL')}\`\`\``)
            let user = newMessage.author
            let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
            if(avatar.endsWith(".gif?size=1024")){
              messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))
            } else {
              messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
            }
          
          return client.channels.cache.get(config.logs.messagelog).send({ 
            embeds: [messageEditedEmbed]
            })
          });
    
          client.on("ready", async () => {
            const guild1 = client.guilds.cache.get(config.Guild.GuildID)
            if(guild1){
            if(guild1.channels.cache.find(a => a.name === "Gelen Başvurular")){
            await guild1.channels.cache.filter(mr => mr.parent).filter(cs => cs.parent.name === "Gelen Başvurular").map(cs => cs.delete().catch(e => {console.log("Kanal Silmeye Yetkim Yetmiyor veya Kanal Zaten Yok!")}))
            }}
            setInterval(() => {
            const guild = client.guilds.cache.get(config.Guild.GuildID)
            if(guild){
            const channel = guild.channels.cache.get(config.basvuru.basvuruyapchannel)
            if(channel){
            const role = guild.roles.cache.get(config.basvuru.staff)
            if(role){
            const channel1 = guild.channels.cache.get(config.basvuru.log)
            if(channel1){
            const role2 = guild.roles.cache.get(config.registration.enaltyetkilirolü)
            if(role2){
            let button = new MessageButton()
            .setLabel("Başvurmak İçin Tıkla!")
            .setStyle("SECONDARY")
            .setCustomId("başvuru")
            .setEmoji("🔔")
            const row = new MessageActionRow().addComponents(button)
              
            const embed = new MessageEmbed()
            .setTitle(config.basvuru.title)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(config.basvuru.color)
            .setDescription(config.basvuru.description)
            .setFooter(config.bot.BotStatus)
            
            const data = db.get("ubmesaj")
            if(data){
            channel.messages.fetch(data.message).then(async msg => {
              
            msg.edit({ embeds: [embed], components: [row] }).then(async cs => {
            await db.set("ubmesaj", {
            message: cs.id,
            channel: cs.channel.id
            })}).catch(e => {})
            }).catch(err => {
            channel.send({ embeds: [embed], components: [row] }).then(async cs => {
            await db.set("ubmesaj", {
            message: cs.id,
            channel: cs.channel.id
            })}).catch(e => {})
            })
            } else {
            channel.send({ embeds: [embed], components: [row] }).then(async cs => {
            await db.set("ubmesaj", {
            message: cs.id,
            channel: cs.channel.id
            })}).catch(e => {})
            }} else {
            console.log("config.js Dosyasına sRole Kısmını Doldurmamışsın Yada Rol Yok!")
            }} else {
            console.log("config.js Dosyasına Log Channel ID Girilmemiş Yada Kanal Yok!")
            }} else {
            console.log("config.js Dosyasına Staff ID Girilmemiş Yada Rol Yok!")
            }} else {
            console.log("config.js Dosyasına Kanal ID Girilmemiş Yada Kanal Yok!")
            }} else {
            console.log("config.js Dosyasına Sunucu ID Girilmemiş Yada Sunucu Yok!")
            }}, 20000)})
            
            
            
            
            
            client.on("interactionCreate", async (interaction) => {
            if(!interaction.isButton()) return;
            let user = interaction.guild.members.cache.get(interaction.user.id)
            let channel = interaction.guild.channels.cache.get(interaction.channel.id)
            let message = channel.messages.fetch(interaction.message.id)
            let data = db.get("ubmesaj")
            
            if(data){
            let guild = client.guilds.cache.get(interaction.guild.id)
            if(guild){
            if(interaction.customId === "başvuru") {
            let channel = guild.channels.cache.get(data.channel)
            if(channel){
            if(data.message == interaction.message.id){
            if(db.get("başvurutimeout."+user.id)){
            if(Date.now() > Number(db.get("başvurutimeout."+user.id)+config.basvuru.timeout)){
            await db.delete("başvurutimeout."+user.id)
            }}
            if(!user.roles.cache.has(config.registration.enaltyetkilirolü)){
            if(!db.get("başvurutimeout."+user.id)){
            const kontrol = guild.channels.cache.find(cs => cs.name === 'basvuru-'+user.id)
            if(kontrol){
            await interaction.reply({ content: 'Daha önceden açılmış bir başvurun bulunmakta.', ephemeral: true}).catch(e => {})
            } else {
            let kontrol2 = guild.channels.cache.find(cs => cs.name === "BAŞVURULAR")
            if(!kontrol2){
            await guild.channels.create('BAŞVURULAR', {type: 'GUILD_CATEGORY'}).then(async tt => {
            kontrol2 = tt
            }).catch(e => {console.log("Kategori oluşturma yetkim yok!")})
            }
              
            await guild.channels.create('basvuru-'+user.id, {
            type: 'GUILD_TEXT',
            parent: kontrol2,
            permissionOverwrites: [{
            id: guild.id,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
            },{
            id: user.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL,Permissions.FLAGS.SEND_MESSAGES],
            }],}).then(async mr => {
            
            let cevaplar = []
            let num = 0;
            const embed1 = new MessageEmbed()
            .setTitle("BILGILENDIRME!!")
            .setColor("YELLOW")
            .setDescription("Sırasıyla sorulacak `"+config.basvuru.sorular.length+"` tane soruya 10 dakika içerisinde cevap vermelisin.")
            .setFooter(config.bot.BotFooter)
            await mr.send({embeds: [embed1]}).catch(e => {})
            await mr.send("<@"+user.id+">: "+config.basvuru.sorular[num]).catch(e => {})
            
            const collector1 = mr.createMessageCollector({time: 600000});
            collector1.on('end', async collected => {
              setTimeout(async () => {
              return await mr.delete().catch(e => {console.log("Kanal silmeye yetkim yetmiyor veya kanal yok!")})
              }, 10000)
              });
            
            const filter = m => {
            return m.content.includes(m.content) && m.author.id === user.id;
            } 
            const collector = mr.createMessageCollector({ filter, time: 600000});
              
            collector.on('collect', async (msg) => {
            if(config.basvuru.sorular[num]){
            cevaplar.push("Soru: "+Number(num+1)+": `"+config.basvuru.sorular[num]+"`\nBaşvuru Yapanın Cevabı: `"+msg.content+"`")
            num = num+1
            await mr.send(config.basvuru.sorular[num] ? "<@"+user.id+"> "+config.basvuru.sorular[num] : "Başvurun için teşekkürler yakında başvuru cevabını alacaksın.").catch(async e => {})
            if(config.basvuru.sorular.length === num){
            collector.stop("success")
            const log = guild.channels.cache.get(config.basvuru.log)
            if(log){
            const staff = guild.roles.cache.get(config.basvuru.staff)
            if(staff){
            
            let button = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel("Kabul Et!")
            .setStyle("SUCCESS")
            .setEmoji(config.emojis.yes)
            .setCustomId("onayla"),
            new MessageButton()
            .setLabel("Reddet")
            .setStyle("DANGER")
            .setEmoji(config.emojis.no)
            .setCustomId("reddet"))
            
            const embed = new MessageEmbed()
            .setTitle("Yeni Başvuru Geldi!")
            .setColor("RANDOM")
            .setDescription("Başvuran Kullanıcı: <@"+user.id+">\n\n"+cevaplar.map(cs => cs).join("\n\n"))
            .setFooter(config.bot.BotFooter)
            await log.send({ embeds: [embed], components: [button] }).then(async cs => {
            await db.set("başvuru."+cs.id, user.id)
            }).catch(e => {})
            }}}}}); 
            
            collector.on('end', async collected => {
            setTimeout(async () => {
            return await mr.delete().catch(e => {console.log("Kanal silmeye yetkim yetmiyor veya kanal yok!")})
            }, 10000)
            });
              
            await interaction.reply({ content: 'Başvuru talebiniz için size özel <#'+mr.id+'> kanalı açıldı, kanalda ki soruları sırasıyla cevaplamanız bekleniyor.', ephemeral: true}).catch(e => {})
            }).catch(e => {console.log("Kanal Oluşturmaya Yetkim Yetmiyor!")})
            }} else {
            await interaction.reply({ content: 'Kısa süre önce reddedilmiş bir başvurun var ancak `'+ms(Number(db.get("başvurutimeout."+user.id)+config.basvuru.timeout-Date.now()))+'` sonra tekrar başvurabilirsin.!**', ephemeral: true}).catch(e => {})
            }} else {
            await interaction.reply({ content: 'Yetkili rolünüz varken başvuru yapamazsınız!', ephemeral: true}).catch(e => {})
            }}}}
            
              
            if(interaction.customId === "onayla") {
            if(user.roles.cache.has(config.basvuru.staff)){
            let csm = db.get("başvuru."+interaction.message.id)
            if(csm){
            csm = guild.members.cache.get(csm)
            if(csm){
            if(config.basvuru.ilkytrolleri){
            config.basvuru.ilkytrolleri.map(async rs => {
            const role = guild.roles.cache.get(rs)
            if(role){
            await csm.roles.add(role.id).catch(e => {console.log("Kullanıcıya Rol Vermeye Yetkim Yetmiyo veya Rol Zaten Yok!")})
            }})
            await db.delete("başvuru."+interaction.message.id)
            await csm.send(config.basvuru.successMessage).then(async ss => {
            await interaction.reply({ content: '<@'+csm.id+'> kullanıcısının başvuru talebi başarıyla kabul edildi.', ephemeral: true}).catch(e => {})
            }).catch(async e => {
            await interaction.reply({ content: '<@'+csm.id+'> kullanıcısının başvuru talebi başarıyla kabul edildi.', ephemeral: true}).catch(e => {})
            })
            await interaction.message.delete().catch(e => {})
            }} else {
            await db.delete("başvuru."+interaction.message.id)
            await interaction.reply({ content: 'Başvuruyu talep eden kullanıcı sunucudan ayrılmış.', ephemeral: true}).catch(e => {})
            await interaction.message.delete().catch(e => {})
            }}} else {
            await interaction.reply({ content: '<@&'+config.basvuru.staff+'> rolünüz olmadığı için yetkili alamazsınız/reddedemezsiniz.', ephemeral: true}).catch(e => {})
            }}
              
              
            if(interaction.customId === "reddet") {
            if(user.roles.cache.has(config.basvuru.staff)){
            let csm = db.get("başvuru."+interaction.message.id)
            if(csm){
            csm = guild.members.cache.get(csm)
            if(csm){
            await db.delete("başvuru."+interaction.message.id)
            await db.set("başvurutimeout."+csm.id, Date.now())
            await csm.send(config.basvuru.deleteMessage).then(async ss => {
            await interaction.reply({ content: '<@'+csm.id+'> kullanıcısının başvuru talebi reddedildi.', ephemeral: true}).catch(e => {})
            }).catch(async e => {
            await interaction.reply({ content: '<@'+csm.id+'> kullanıcısının başvuru talebi reddedildi.', ephemeral: true}).catch(e => {})
            })
            await interaction.message.delete().catch(e => {})
            } else {
            await db.delete("başvuru."+interaction.message.id)
            await interaction.reply({ content: 'Başvuruyu yapan kullanıcı sunucudan ayrıldığı için başvuru talebi silindi.', ephemeral: true}).catch(e => {})
            await interaction.message.delete().catch(e => {})
            }}} else {
            await interaction.reply({ content: '<@&'+config.basvuru.staff+'> rolünüz olmadığı için yetkili alamazsınız/reddedemezsiniz.', ephemeral: true}).catch(e => {})
            }}
            }}})
            