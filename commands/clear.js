module.exports = {
    name: 'clear',
    aliases: ['clr'],
    //cooldown: 10,
    description: 'Clear messages',
    async execute(message, args, client, Discord){
        if(!args[0]) return message.reply('Enter amount of messages to be deleted');
        if(isNaN(args[0])) return message.reply('Please enter a proper number');
        
        if(args[0]>100) return message.reply('Enter a number less than 100');
        if(args[0]<1) return message.reply('Enter number which more than 1')

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}