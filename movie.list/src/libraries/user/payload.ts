export interface LoginPayload {
    username: string
    password: string
    request_token: string
}

export interface LogoutPayload {
    session_id: string
}