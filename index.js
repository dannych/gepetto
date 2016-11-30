let Botkit = require('botkit');

let controller = Botkit.slackbot({});
let bot = controller.spawn({ 
    token: 'your-token'
}).startRTM();
