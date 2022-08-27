export interface Auntetication {
    success: boolean
    expires_at: string
    request_token: string
}

export interface UserSession {
    success: boolean
    expires_at: string
    request_token: string
}

export interface DeleteSession {
    success: boolean
}

export interface LoginInputs {
    username: string
    password: string
}

export interface RateMovie {
    status_code: number
    status_message: string
}