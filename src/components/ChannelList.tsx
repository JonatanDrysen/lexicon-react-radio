import { useState, useEffect } from "react"
import { getChannelList } from "../api/getChannelList"
import { ChannelListResponse } from "../interfaces"
import { Link } from "react-router-dom"

export function ChannelList() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [achannelListData, setChannelListData] = useState<ChannelListResponse | null>(null)

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
                const response = await getChannelList(currentPage)
                setChannelListData(response)
            } catch (err) {
                console.error("Err fetching data: ", err)
            }
        }
        fetchData()
    }, [currentPage])

    return (
        <div>
            <ul>
                {achannelListData && achannelListData.channels.map((channel) => {
                    return (
                        <li key={channel.id}>
                            <Link to={`/channels/${channel.id}`}>{channel.name}</Link>
                        </li>
                    )
                })}
            </ul>
            {achannelListData &&
                <p>
                    Sida {achannelListData.pagination.page} av {achannelListData.pagination.totalpages}
                    <button onClick={() => handlePageChange("prev", achannelListData.pagination.totalpages)}>{"<"}</button>
                    <button onClick={() => handlePageChange("next", achannelListData.pagination.totalpages)}>{">"}</button>
                </p>
            }
        </div>
    )
}
