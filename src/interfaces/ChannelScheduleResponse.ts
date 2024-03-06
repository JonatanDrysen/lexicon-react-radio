import { Pagination } from ".";

interface Schedule {
    episodeid: number,
    title: string,
    description: string,
    starttimeutc: string,
    endtimeutc: string,
    program: {
        id: number,
        name: string
    },
    channel: {
        id: number,
        name: string
    },
    imageurl: string,
    imageurltemplate: string,
    photographer: string
}

export interface ChannelScheduleResponse {
    copyright: string,
    schedule: Schedule[],
    pagination: Pagination
}