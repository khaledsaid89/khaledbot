const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598815005957160971")
setInterval(function() {
channel.send(`bavly is not invilble``);
}, 30)
})

client.login(process.env.BOT_TOKEN);