interface Channel {
    image: string,
    imagetemplate: string,
    color: string,
    tagline: string,
    siteurl: string,
    liveaudio: object,
    scheduleurl: string,
    channeltype: string,
    xmltvid: string,
    id: number,
    name: string
}

export interface AllChannelsResponse {
    copyright: string,
    channels: Channel[],
    pagination: {
        page: number,
        size: number,
        totalhits: number,
        totalpages: number,
        nextpage?: string,
        previouspage?: string,
    }
}