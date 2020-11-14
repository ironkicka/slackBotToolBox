require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const token  = process.env.BOT_USER_OAUTH_ACCESS_TOKEN

const deleteMessage = async (url) => {
    // APIトークン
    const slackApp = new WebClient(token);
    const data = parseSlackMessageLink(url)
    const channel = data.channelId
    const ts = data.ts
    const params = {
        channel: channel,
        ts:ts
    };
    const response = await slackApp.chat.delete(params);
    console.log(response);
};

const parseSlackMessageLink = (url)=>{
    const parsedUrl = new URL(url)
    const pathname = parsedUrl.pathname
    const splitPathName = pathname.split('/')
    const channelId = splitPathName[2]
    const ts_ = splitPathName[3].replace('p','')
    const ts = ts_.slice(0,-6) + '.' + ts_.slice(-6)
    return {channelId:channelId,ts:ts}
}

deleteMessage(process.argv[2])
    .then(r =>{
        console.log(r)
    })
    .catch(err => {
        console.log(err)
    });
