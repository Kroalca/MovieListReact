import { Link, Outlet } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import './MainLayout.scss'

export const MainLayout = (): JSX.Element => {
    const { user, logout } = useLogin()
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <div>
                        <Link to="/movie">{ user.name ? user.name : 'Guest' }</Link>
                    </div>
                    <div>
                    {user.request_token 
                    ? <button onClick={logout} className='logout-button'>Logout</button> 
                    : <Link to="/login">Login</Link>}
                    </div>
                </div>
            </nav>
            <main className="main-children">
                <Outlet />
            </main>
        </>
    )
}