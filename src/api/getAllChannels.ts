import { AllChannelsResponse } from "../interfaces";

export async function getAllChannels(page: number): Promise<AllChannelsResponse> {
    const url = `http://api.sr.se/api/v2/channels?format=json&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}