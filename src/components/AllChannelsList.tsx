import { useState, useEffect } from "react"
import { getAllChannels } from "../api/getAllChannels"
import { AllChannelsResponse } from "../interfaces"

export function AllChannelsList() {
    const [allChannelsData, setAllChannelsData] = useState<AllChannelsResponse | null>(null)

    async function fetchData(): Promise<void> {
        try {
            const response = await getAllChannels()
            setAllChannelsData(response)
        } catch (err) {
            console.error("Err fetching data: ", err)
        }
    }

    useEffect(() => {
        //   console.log("useEffect triggered.")
        fetchData()
    }, [])

    return (
        <div>
            <h2>All channels:</h2>
            <ul>
                {allChannelsData && allChannelsData.channels.map((channel) => {
                    return (
                        <li key={channel.id}>{channel.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
