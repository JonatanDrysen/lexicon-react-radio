import { ChannelListResponse } from "../interfaces";

export async function getChannelList(page: number): Promise<ChannelListResponse> {
    const url = `http://api.sr.se/api/v2/channels?format=json&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}