import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChannelPrograms } from "../api/getChannelPrograms";
import { ChannelProgramsResponse, ChannelScheduleResponse } from "../interfaces";
import { ProgramView } from "./ProgramView";
import { TableauView } from "./TableauView";
import { getChannelSchedule } from "../api/getChannelSchedule";

export function Channel() {
    const { channelId } = useParams()
    const [channelData, setChannelData] = useState<ChannelProgramsResponse | null>(null)
    const [scheduleData, setScheduleData] = useState<ChannelScheduleResponse | null>(null)
    const [view, setView] = useState("program")    

    useEffect(() => {
        const id: number = Number(channelId)

        const fetchData = async (id: number) => {
            const programResponse = await getChannelPrograms(id)
            const scheduleResponse = await getChannelSchedule(id)
            setChannelData(() => programResponse)
            setScheduleData(() => scheduleResponse)
        }
        fetchData(id)
    }, [channelId])

    return (
        <>
            <h2>{channelData && channelData.programs[0].channel.name}</h2>
            <div>
                <button onClick={() => setView("program")}>Program</button>
                <button onClick={() => setView("tableau")}>Tablå</button>
            </div>
            <div>
                {view === "program" && <ProgramView channelData={channelData} />}
                {view === "tableau" && <TableauView scheduleData={scheduleData}/>}
            </div>
        </>
    )
}
