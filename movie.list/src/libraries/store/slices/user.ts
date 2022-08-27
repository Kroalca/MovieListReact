import { createSlice } from "@reduxjs/toolkit"

interface User {
    name?: string
    request_token?: string
}

const initialStateUser: Record<string, string | undefined> = {
    request_token: undefined,
    name: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialStateUser
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = {
                name: undefined,
                request_token: undefined
            }
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer