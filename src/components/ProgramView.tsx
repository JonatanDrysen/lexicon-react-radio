import { ChannelProgramsResponse } from "../interfaces"

interface ProgramViewProps {
    channelData: ChannelProgramsResponse | null
}

export function ProgramView({ channelData }: ProgramViewProps): JSX.Element {
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
