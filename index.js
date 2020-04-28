const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'You can not see this HA HA';

const prefix = '!';

bot.on('ready', () => {
     console.log('Oxy Lord: Online');
});

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(' ');

    switch (args[0]) {
        case 'guide':
            message.channel.send('Follow the clouds');
        break;
    }
    switch (args[0]) {
        case 'speak':
            message.channel.send('I have spoken');
        break;
    }
    switch (args[0]) {
        case 'eat':
            message.channel.send('Yummy, nice food');
        break;
    }
});

bot.login(token);