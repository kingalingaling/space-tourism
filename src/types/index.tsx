export interface destDetails {
    id: number,
    name: string,
    image: string,
    description: string,
    distance: string,
    travel: string
}

export type NavArray = Array<NavTypes>

export interface NavTypes {
    id: string | number,
    url: string,
    page: string
}