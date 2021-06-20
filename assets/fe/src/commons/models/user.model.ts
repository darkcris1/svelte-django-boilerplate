export interface User {
    id: number,
    name: string,
    last_name: string,
    first_name: string
}

export interface FetchUser  {
    user: User,
    token: string
}