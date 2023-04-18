const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('Buddy is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
    else if (command === 'youtube'){
        message.channel.send('https://www.youtube.com');
    }
});

client.login('ODY0MzYxMDg4NTU1NTQ4NzIy.YO0U_g.1tvPZykGw3VU1U3_OM-Rb5MPDYY');