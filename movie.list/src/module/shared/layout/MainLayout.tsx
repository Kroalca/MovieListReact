import { ReactNode } from "react"
import { Link } from "react-router-dom"
import './MainLayout.scss'

interface Props {
    children: ReactNode
}

export const MainLayout = ({ children }: Props): JSX.Element => {
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