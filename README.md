# Gepetto

A simpler Slack bot.

---

We are going to use NodeJS and JavaScript as our main programming language to develop this Slack bot.

Check node version

run `node --version` my version `v6.3.1`

Start node project

run `npm init` and enter all the way

We will need some helps from a third party plugin to simplify Slack API - BotKit

run `npm install --save botkit`

Now, we are ready to start creating our Bot

---

create `index.js` file

starting up bot 

```
let Botkit = require('botkit');

let controller = Botkit.slackbot({});
let bot = controller.spawn({ 
    token: 'your-token'
}).startRTM();
```

---

Creating token

**Note!** creating a bot will consume one of your available integration limit. 

You can use your existing Slack team chatroom or just create a new one.

After selecting the desired chatroom, create a bot by following this link https://my.slack.com/services/new/bot

Give the bot a name and then you will be given the bot's token.

--- 

Creating response

```
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello World!');
});
```

start `node index`

open your Slack chatroom.

See that your Bot is turned on which indicated by green circle besides its name.

Start a conversation by clicking the name, and say 'Hi'