module.exports = {
    name: 'kick',
    description: 'Kick members',
    execute(message, args, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('User has been kicked');
        }
        else{
            message.channel.send('The mentioned member was not kicked');
        }
    }
}
