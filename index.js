let Botkit = require('botkit');

let controller = Botkit.slackbot({});
let bot = controller.spawn({ 
    token: 'your-token'
}).startRTM();

controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello World!');
});