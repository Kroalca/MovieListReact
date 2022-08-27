import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateSessionWithLoginMutation, useDeleteSessionMutation, useLazyGetAuthenticationQuery } from "../../../libraries/store/apiSlice"
import { useAppDispatch, useAppSelector } from "../../../libraries/store/hooks"
import { clearUser, setUser } from "../../../libraries/store/slices/user"

export const useLogin = () => {
    const [getAuntetication, {isLoading: isLoadingAuntetication, isError: isErrorAuntetication}] = useLazyGetAuthenticationQuery()
    const [createSessionWithLogin, {isLoading: isLoadingLogin, isError: isErrorLogin}] = useCreateSessionWithLoginMutation()
    const [deleteSession, {isLoading: isLoadingDeleteSession, isError: isErrorDeleteSession}] = useDeleteSessionMutation()
    const [token, setToken] = useState<undefined | string>(undefined)
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.user)
    const navigate = useNavigate()
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
        dispatch(setUser({
            name: username,
            request_token: session.request_token
        }))
        navigate('/')
    }

    const logout = async () => {
        if (user.request_token) {
            await deleteSession({ session_id: user.request_token }).unwrap
            dispatch(clearUser())
            setToken(undefined)
        }
    }

    const getUser = () => {
        return user
    }

    return {
        login,
        logout,
        getUser,
        token,
        isLoading,
        isError
    }
}