import { ChannelScheduleResponse } from "../interfaces";

export async function getChannelSchedule(channelId: number): Promise<ChannelScheduleResponse> {
    const url = `https://api.sr.se/v2/scheduledepisodes?channelid=${channelId}&format=json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}