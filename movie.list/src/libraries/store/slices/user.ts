import { createSlice } from "@reduxjs/toolkit"

interface User {
    name?: string
    request_token?: string
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            request_token: undefined,
            name: undefined
        }
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