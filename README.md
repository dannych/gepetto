## Install Bot

In this module, you will prepare your Bot by injecting and using the BotKit library.

1. Create the entry file `touch index.js`
2. Open the file with your favorite editor
3. Import the BotKit library by adding this line `let Botkit = require('botkit');`
4. The library has created an abstraction of the complicated Slack API. All you need is to put all these codes: 
```
let controller = Botkit.slackbot({});
let bot = controller.spawn({ 
    token: 'your-token'
}).startRTM();
```

*Cool!* Your Bot is almost complete. 

**Next:** [Register Bot and Get Token](https://github.com/dannych/gepetto/tree/3-token)
