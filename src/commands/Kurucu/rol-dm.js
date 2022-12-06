const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rol-mesaj",
  aliases: ["rolmesaj", "roldm", "rol-dm"],
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const role =
        message.mentions.roles.first() ||
        message.guild.roles.cache.get(args[0]);

    const mesaj = args.slice(1).join(" ");

    if (!role)
        return message.channel.send(
            `Öncelikle bir rol etiketlemelisin veya ID'sini belirtlemlisin!`
        );

    if (!mesaj) return message.channel.send(`Öncelikle geçerli bir mesaj yazmalısın!`);

    role.members.forEach(async (member) => {
        member.send(mesaj).catch((x) => {
            console.log(`${member.user.tag}, bu kullanıcılara mesaj gönderilemiyor.`);
        });
    });

    const members = message.guild.roles.cache
        .find((roles) => roles.id === role.id)
        .members.map((üyeler) => `<@!${üyeler.user.id}>`)
        .join("\n");

    const bgg = await message.channel.send(`Roldeki kullanıcılara belirttiğiniz mesaj gönderiliyor.`);

    setTimeout(() => {
        bgg.edit(
            `Belirttiğiniz mesaj başarıyla şu kullanıcılara gönderildi; \n${members}`
        );
    }, 5000);
}}