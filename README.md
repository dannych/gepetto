## Create "Your" Bot

* Now, you need to make your bot response to `hello` by adding this code
```
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello World!');
});
```
* Start your bot by running `node index`
* Open your Slack chatroom.
* Say `hello` to your Bot

*Congratulations!* You have created your own Bot

**Next:** [What's next](https://github.com/dannych/gepetto#whats-next)
