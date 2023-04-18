module.exports = async (message, args, client, Discord) =>{

    
    
    const guild = client.guilds.cache.get('867422161999495259');
    setInterval(() =>{
        const memberCounter = guild.memberCount;
        const channel = guild.channels.cache.get('867992247650623548');
        channel.setName(`Users Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 60000 );
}