
const parseMessageLink = (url)=>{
    const parsedUrl = new URL(url)
    const pathname = parsedUrl.pathname
    const splitPathName = pathname.split('/')
    const channelId = splitPathName[2]
    const ts_ = splitPathName[3].replace('p','')
    const ts = ts_.slice(0,-6) + '.' + ts_.slice(-6)
    return {channelId:channelId,ts:ts}
}

exports.parseMessageLink = parseMessageLink;