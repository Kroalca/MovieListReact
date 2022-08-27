export interface LoginPayload {
    username: string
    password: string
    request_token: string
}

export interface LogoutPayload {
    session_id: string
}

export interface RateMoviePayload {
    value: number
    movie: number
    session_id: string
}