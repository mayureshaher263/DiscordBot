module.exports = {
    name:'permissions',
    aliases: ['perm', 'prms'],
    description: 'Displays eligibility of commander',
    execute(client, message, args){
        let roles;

        let role = message.guild.roles.cache.find(r => r.name === 'Mod Role')

        if (message.member.permissions.has('KICK_MEMBERS')){
            message.channel.send('you have the permission to kick members')
        }

        else {
            message.channel.send('you dont have the permission to kick members')
        }

        if (message.member.permissions.has('BAN_MEMBERS')){
            message.channel.send('you have the permission to ban members')
        }

        else {
            message.channel.send('you dont have the permission to ban members')
        }

    }
}