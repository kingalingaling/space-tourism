export interface destDetails {
    id: number,
    location: string
}

export type NavArray = Array<NavTypes>

export interface NavTypes {
    id: string | number,
    url: string,
    page: string
}