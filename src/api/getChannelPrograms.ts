import { ChannelProgramsResponse } from "../interfaces";

export async function getChannelPrograms(channelId: number): Promise<ChannelProgramsResponse> {
    const url = `https://api.sr.se/api/v2/programs/index?channelid=${channelId}&format=json`
    const response = await fetch(url)
    const data = await response.json()
    console.log(`got channel ${data.programs[0].channel.name}`, data.programs)
    return data
}