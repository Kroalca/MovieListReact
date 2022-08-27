import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import './MainLayout.scss'

interface Props {
    children: ReactNode
}

export const MainLayout = ({ children }: Props): JSX.Element => {
    const { getUser } = useLogin()
    const user = getUser()
    console.log(user)
    return (
        <main>
            <nav>
                <div className='nav-container'>
                    <div>
                        <Link to="/movie">Kroalca</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
            <section>
                {children}
            </section>
        </main>
    )
}