var Bot = require('./bot.js');

// create a bot
var settings = {
    token: process.env.BOT_API_KEY,
    name: 'barbabot'
};

var bot = new Bot(settings);

bot.on('message', function(message) {
	// Check that message is something written by a user
	if (message.type === 'message' && isUserMessage(message)) {
		bot.postMessageToChannel('bottest', 'Nice message!');
	}
});

function isUserMessage(message) {
	return 'user' in message ? true : false;
}