module.exports = (client) => {
  const channelId = require('./config.json');
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = require('s./config.json');

    const channel = member.guild.channels.cache.get(channelId.channel);
    channel.send(message.message);
  });
};
