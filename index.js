var Bot = require('slackbots'),
	config = require('./config.js');

// create a bot
var settings = {
    token: config.token,
    name: 'barbabot'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('bottest', 'Hello channel!');
});