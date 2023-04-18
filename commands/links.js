/*module.exports = {
    name: 'links',
    description: 'Links List',
    execute(message, args, Discord){
        
        message.channel.send('Links List \n * Link 1: \n * Link 2: \n * Link 3: \n * Link 4: \n');

    }
}*/

/* ---------------------------------------------------------------------------------------------------------*/ 
module.exports = {
    name: 'link 1',
    description: 'Info Link',
    execute(message, args){

        if(message.member.roles.cache.has('865176228280532992'))   
        {message.channel.send('Info link -  https://www.google.com/');}
        else
        {  message.channel.send('You are not eligible for this command');   }

    }
}
/* ---------------------------------------------------------------------------------------------------------*/ 

module.exports = {
    name: 'link 2',
    description: 'Movies link ',
    execute(message, args){

        if(message.member.roles.cache.has('865176228280532992'))   
        {message.channel.send('Movies link -  https://yts.rs/');}
        else
        {  message.channel.send('You are not eligible for this command');   }

    }
}
/* ---------------------------------------------------------------------------------------------------------*/ 

module.exports = {
    name: 'link 3',
    description: 'Music link ',
    execute(message, args){

        if(message.member.roles.cache.has('865176228280532992'))   
        {message.channel.send('Music link -  https://muzmo.me/');}
        else
        {  message.channel.send('You are not eligible for this command');   }

    }
}
/* ---------------------------------------------------------------------------------------------------------*/ 

module.exports = {
    name: 'link 4',
    description: 'Anime link ',
    execute(message, args){

        if(message.member.roles.cache.has('865176228280532992'))   
        {message.channel.send('Music link -  https://gogoanime.vc/');}
        else
        {  message.channel.send('You are not eligible for this command');   }

    }
}
/* ---------------------------------------------------------------------------------------------------------*/ 

module.exports = {
    name: 'link 5',
    description: 'Torrent link ',
    execute(message, args){

        if(message.member.roles.cache.has('865176228280532992'))   
        {message.channel.send('Torrent link -  https://www.1337xx.to/');}
        else
        {  message.channel.send('You are not eligible for this command');   }

    }
}

