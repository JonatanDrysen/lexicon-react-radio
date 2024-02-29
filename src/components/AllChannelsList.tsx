import { useState, useEffect } from "react"
import { getAllChannels } from "../api/getAllChannels"
import { AllChannelsResponse } from "../interfaces"

export function AllChannelsList() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [allChannelsData, setAllChannelsData] = useState<AllChannelsResponse | null>(null)

    function handlePageChange(condition: string, totalpages: number) {
        if(condition === "next" && currentPage < totalpages) {
            setCurrentPage((prevPage) => prevPage + 1)
        } else if(condition === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await getAllChannels(currentPage)
                setAllChannelsData(response)
            } catch (err) {
                console.error("Err fetching data: ", err)
            }
        }
        fetchData()
    }, [currentPage])

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
            {allChannelsData &&
                <p>
                    Page {allChannelsData.pagination.page} of {allChannelsData.pagination.totalpages}
                    <button onClick={() => handlePageChange("prev", allChannelsData.pagination.totalpages)}>{"<"}</button>
                    <button onClick={() => handlePageChange("next", allChannelsData.pagination.totalpages)}>{">"}</button>
                </p>
            }
        </div>
    )
}
