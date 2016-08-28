var SlackBot = require('slackbots');

class Bot extends SlackBot {
	constructor (settings) {
		super(settings);
	}
}

module.exports = Bot;