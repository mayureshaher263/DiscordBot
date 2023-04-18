const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '.';

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handler/${handler}`)(client, Discord);
})





/*client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('867978283394936852').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});*/


/*client.on('ready', () =>{
    console.log('Buddy is online !');
    memberCounter(client);

});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



 
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role =>role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('867978283394936852').send(`Welcome <@${guildMember.user.id}> to the Server!`)
});




client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args); 
    }

    else if (command === 'rules'){
        client.commands.get('rules').execute(message, args);
    }
    
    else if (command === 'link1'){
        client.commands.get('link1').execute(message, args);
    }else if (command === 'link2'){
        client.commands.get('link2').execute(message, args);
    }else if (command === 'link3'){
        client.commands.get('link3').execute(message, args);
    }else if (command === 'link4'){
        client.commands.get('link4').execute(message, args);
    }else if (command === 'link5'){
        client.commands.get('link5').execute(message, args);
    }
    
    else if (command === 'permissions'){
        client.commands.get('permissions').execute(message, args);
    }
    
    else if (command === 'embeds'){
        client.commands.get('embeds').execute(message, args, Discord)
    }
    
    else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    
    else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    
    else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    
    else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    else if (command === 'play'){
        client.commands.get('play').execute(message, args);
    }
    else if (command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }


});*/


client. login(process.env.DISCORD_TOKEN);