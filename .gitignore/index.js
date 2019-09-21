const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ":";

bot.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#00dbfb")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(":grin: Bienvenue" + user + "sur le serveur " + user.guild.name + " !"
        )
        .setFooter("Creer par Dalmatheo")
    user.guild.channels.get("434747726157053982").send(joinEmbed)
    user.user.createDM().then()
    user.addRole("434746554130104320")
});

bot.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
        .setColor("#00dbfb")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("Sniff " + user.user.username + "est partie ...")
        .setFooter("Crée par Dalmatheo")
    user.guild.channels.get("434747726157053982").send(leaveEmbed)
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === ":help") {
            message.channel.send('Je peut t aidé');
        }
    }
    if(message.content[0] === PREFIX) {
        if(message.content === ":Mes infos") {
            message.channel.send('je peut le faire, ton client :' + message.author.client);
        }
    }
});

bot.on("message", message => {

    bot.on("guildMemberRemove", user =>{
        user.createDM().then(channel => {
            channel.send("test");
        })
    });
    })

bot.login('process.end.TOKEN')
