const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome");
const status = require("./config.json")

client.on("ready", () => {
  console.log("Our Discord bot is online");
  client.user.setActivity(status.status)

  welcome(client);
});

client.login(config.token);
