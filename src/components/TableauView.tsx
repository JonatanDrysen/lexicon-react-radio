import { ChannelScheduleResponse } from "../interfaces"

interface ScheduleViewProps {
  scheduleData: ChannelScheduleResponse | null
}

export function TableauView({ scheduleData }: ScheduleViewProps): JSX.Element {
  function convertDateTime(rawDate: string) {
    if(!rawDate) {
      return undefined;
    }

    const matchResult = rawDate.match(/\d+/);
    if (!matchResult) {
        return undefined;
    }

    const timestamp = parseInt(matchResult[0], 10);
    const newDate = new Date(timestamp)

    const formattedDate = newDate.toLocaleString()
    return formattedDate
  }

  return (
    <>
      <div>
        <ul>
          {scheduleData && scheduleData.schedule.map((episode) => {
            return (
              <li key={episode.episodeid}>
                <span>
                  {episode.title} {" - "}
                </span>
                <span>
                    {convertDateTime(episode.starttimeutc)}
                    {" till "}
                    {convertDateTime(episode.endtimeutc)}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
