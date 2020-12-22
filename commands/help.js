const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setImage(`https://rafflepress.com/wp-content/uploads/2019/07/how-to-do-a-giveaway.png`)
      .addField(">**DEVLOPER** :  ", `➪ <@687458493124444170>`, true) 
      .setTitle("Command List & Guide for the Bot")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
      .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available more commands will be added soon.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "@start #giveaway 5m 1 Testing\n@end Testing\n@reroll Testing")
      .addField("😁 Fun 😁", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**You've Got a Mail 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
