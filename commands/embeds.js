module.exports = {
    name : 'embeds',
	aliases: ['embed'],
    description : 'Display Embed',
    execute(message, args, client, Discord){


const newEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Rules')
	.setURL(' ')
	.setDescription('Server Rules')
	.setThumbnail(' ')
	.addFields(
		{ name: 'Link 1', value: 'Info link - https://www.google.com'},
		{ name: 'Link 2', value: 'Movies link - https://yts.rs/'},
		{ name: 'Link 3', value: 'Anime Link - https://gogoanime.vc/'},
		{ name: 'Link 4', value: 'Torrent Link - https://www.1337xx.to/'},
	)
	.setImage(' ')
	.setFooter('Use the torrent link while VPN is On.', ' ');

message.channel.send(newEmbed);



/*const newEmbed = new Discord.MessageEmbed()
.setColor('#304281')
.setTitle('Rules')
.setUrl('https://www.google.com')
.setDescription('Embed for Server Rules')
.addFields(
    {name:'rule 1', value: 'be nice'}, 
    {name:'rule 1', value: 'dont spam'},
    {name:'rule 1', value: 'post memes'},

)
.setImage('https://www.pinterest.com/pin/753508581398477692')
.setFooter('Make sure to Check rules');
message.channel.send(newEmbed);*/
    }

}