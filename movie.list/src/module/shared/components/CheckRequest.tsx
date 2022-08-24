import { ReactNode } from "react"
import './CheckRequest.scss'

interface Props {
    isLoading: boolean
    isError: boolean
    refetch: () => void
    children: ReactNode
}

export const CheckRequest = ({ isLoading, isError, refetch, children }: Props): JSX.Element => {
    if (isLoading) {
        return (
            <div className='all-screen'>
                <h2>Loading...</h2>
            </div>
        )
    } else if (isError){
        return (
            <></>
        )
    }

    return (
        <>
            {children}
        </>
    )
}