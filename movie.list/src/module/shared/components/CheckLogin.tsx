import { ReactNode } from "react"
import { useLogin } from "../hooks/useLogin"

interface Props {
    children: ReactNode
}

export const CheckLogin = ({ children }: Props) => {
    const { user } = useLogin()

    if (user.request_token && user.name) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return <></>
    }
}