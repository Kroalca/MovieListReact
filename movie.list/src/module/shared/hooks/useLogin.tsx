import { useState } from "react"
import { useCreateSessionWithLoginMutation, useDeleteSessionMutation, useLazyGetAuthenticationQuery } from "../../../libraries/store/apiSlice"

export const useLogin = () => {
    const [getAuntetication, {isLoading: isLoadingAuntetication, isError: isErrorAuntetication}] = useLazyGetAuthenticationQuery()
    const [createSessionWithLogin, {isLoading: isLoadingLogin, isError: isErrorLogin}] = useCreateSessionWithLoginMutation()
    const [deleteSession, {isLoading: isLoadingDeleteSession, isError: isErrorDeleteSession}] = useDeleteSessionMutation()
    const [token, setToken] = useState<undefined | string>(undefined)
    const isLoading = isLoadingAuntetication || isLoadingLogin ||isLoadingDeleteSession
    const isError = isErrorLogin || isErrorAuntetication ||isErrorDeleteSession

    const login = async (username: string, password: string) => {
        const token = await getAuntetication().unwrap()
        const session = await createSessionWithLogin({
            username,
            password,
            request_token: token.request_token
        }).unwrap()
        setToken(session.request_token)
    }

    const logout = async () => {
        if (token) {
            await deleteSession({ session_id: token }).unwrap
            setToken(undefined)
        }
    }

    return {
        login,
        logout,
        token,
        isLoading,
        isError
    }
}