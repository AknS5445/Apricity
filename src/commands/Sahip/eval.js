const config = require("../../../config.json");

module.exports = {
    name: "eval",
    aliases: ["evall"],
    owner: true,
    execute: async (client, message, args, embed, author, channel, guild) => {
        if(message.author.id !== "796263552771817472") return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle geliştiricim olmalısın!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let code = args.join(" ");

        try {
            var result = clean(await eval(code));
            if (result.includes(client.token))
                return message.reply({ embeds: [embed.setDescription("token alamzsn knk")] });
            channel.send(result, { code: "js", split: true });
        } catch (err) {
            channel.send(err, { code: "js", split: true });
        }
    },
};

function clean(text) {
    if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
    text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}