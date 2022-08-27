import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import './MainLayout.scss'

interface Props {
    children: ReactNode
}

export const MainLayout = ({ children }: Props): JSX.Element => {
    const { getUser, logout } = useLogin()
    const user = getUser()
    return (
        <main>
            <nav>
                <div className='nav-container'>
                    <div>
                        <Link to="/movie">Kroalca</Link>
                    </div>
                    <div>
                    {user.request_token ? <button onClick={logout}>Logout</button> :<Link to="/login">Login</Link>}
                    </div>
                </div>
            </nav>
            <section>
                {children}
            </section>
        </main>
    )
}