require('dotenv').config({path:'../.env'});
const { WebClient } = require('@slack/web-api');
const token  = process.env.BOT_USER_OAUTH_ACCESS_TOKEN

const main = async () => {
    const channel = 'hoge';
    // メッセージ
    const text = 'Hello World';
    const slackApp = new WebClient(token);
    const params = {
        channel: channel,
        text: text,
    };

    const response = await slackApp.chat.postMessage(params);
    console.log(response);
};

main();