import { Pagination } from ".";

interface SocialMediaPlatforms {
    platform: string,
    platformurl: string

}

interface Programs {
    description: string,
    programcategory: {
        id: number,
        name: string
    },
    payoff: string,
    email: string,
    phone: string,
    programurl: string,
    programslug: string,
    programimage: string,
    programimagetemplate: string,
    programimagewide: string,
    programimagetemplatewide: string,
    socialimage: string,
    socialimagetemplate: string,
    socialmediaplatforms: SocialMediaPlatforms[],
    channel: {
        id: number,
        name: string
    },
    archived: boolean,
    broadcastinfo?: string,
    hasondemand: boolean,
    haspod: boolean,
    responsibleeditor: string,
    id: number,
    name: string
}

export interface ChannelProgramsResponse {
    copyright: string,
    programs: Programs[],
    pagination: Pagination
}