## Create "Your" Bot

* Now, you need to make your bot response to `hello` by adding this code
```
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello World!');
});
```
* Start your bot by `node index`
* Open your Slack chatroom.
* Say `hello` to your Bot
