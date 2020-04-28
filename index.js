const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzAzOTkyNjE0MDU1MzEzNDkz.XqWqtg.MudIDk0GT5oFAqiuJi_NfjAmpo4';

const prefix = '!';

bot.on('ready', () => {
     console.log('Oxy Lord: Online');
});

bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(' ');

    switch (args[0]) {
        case 'guide':
            message.channel.send('follow the clouds');
        break;
    }
});

bot.login(token);