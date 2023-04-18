module.exports = {
    name: 'ban',
    description: 'Ban members',
    execute(message, args, client, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('User has been banned');
        }
        else{
            message.channel.send('The mentioned member was not banned');
        }
    }
}
