require('dotenv').config({path:'../.env'});
const { WebClient } = require('@slack/web-api');
const slackUrl = require('./commons/url')
const token  = process.env.BOT_USER_OAUTH_ACCESS_TOKEN

const deleteMessage = async (url) => {
    // APIトークン
    const slackApp = new WebClient(token);
    const data = slackUrl.parseMessageLink(url)
    console.log(data)
    const channel = data.channelId
    const ts = data.ts
    const params = {
        channel: channel,
        ts:ts
    };
    const response = await slackApp.chat.delete(params);
    console.log(response);
};

deleteMessage(process.argv[2])
    .then(r =>{
        console.log(r)
    })
    .catch(err => {
        console.log(JSON.stringify(err))
    });
