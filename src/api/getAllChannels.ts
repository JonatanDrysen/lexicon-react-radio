import { AllChannelsResponse } from "../interfaces";

export async function getAllChannels(): Promise<AllChannelsResponse> {
    const url = "http://api.sr.se/api/v2/channels?format=json"
    const response = await fetch(url)
    const data = await response.json()
    return data
}