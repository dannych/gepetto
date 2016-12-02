## Register Bot

In this module, you will register your Bot to the Slack application

1. Login into one of your chatroom or, if you don't have, simple create a new one.
2. Register your bot here https://my.slack.com/services/new/bot
3. Assign its name and you will be given the Bot's token

*Awesome!* Your Bot is registered, now you need to put it into your `index.js.` file by replacing the `your-token`  text with your real token.

_**Note! keep your token safe**_ 
```
let bot = controller.spawn({ 
    token: 'XXXXX-XXXXX-XXXX-XXX'
}).startRTM();
```

**Next:** [Create "Your" Bot](https://github.com/dannych/gepetto/tree/4-respond)
