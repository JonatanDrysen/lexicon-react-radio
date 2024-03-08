import { ChannelScheduleResponse } from "../interfaces";

export async function getChannelSchedule(channelId: number): Promise<ChannelScheduleResponse> {
    const url = `https://api.sr.se/v2/scheduledepisodes?channelid=${channelId}&format=json`
    const response = await fetch(url)
    const data: ChannelScheduleResponse = await response.json()
    const scheduleData = data.schedule
    checkEpisodeIds(scheduleData)
    return data
}

function checkEpisodeIds(scheduleData: ChannelScheduleResponse["schedule"]): ChannelScheduleResponse["schedule"] {
    const seenIds = new Set<number>()

    return scheduleData.map((item) => {
        if (!item.episodeid || seenIds.has(item.episodeid)) {
            const newId = generateNewId()
            item.episodeid = newId
        }
        seenIds.add(item.episodeid)
        return item
    })
}

function generateNewId(): number {
    return Math.floor(Math.random() * 1000000)
}