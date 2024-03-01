import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChannelPrograms } from "../api/getChannelPrograms";
import { ChannelProgramsResponse } from "../interfaces";

export function ChannelPage() {
    const { channelId } = useParams()
    const [channelData, setChannelData] = useState<ChannelProgramsResponse | null>(null)

    useEffect(() => {
        const id: number = Number(channelId)

        const fetchChannel = async (id: number) => {
            const response = await getChannelPrograms(id)
            setChannelData(() => response)
        }
        fetchChannel(id)
    }, [])

    return (
        <>
            <div>
                <ul>
                    {channelData && channelData.programs.map((program) => {
                        return (
                            <li key={program.id}>{program.name}</li>
                        )
                    })}
                </ul>

            </div>
        </>
    )
}