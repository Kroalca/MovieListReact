import { ReactNode } from "react"
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
                        Kroalca
                    </div>
                    <div>
                        User
                    </div>
                </div>
            </nav>
            <section>
                {children}
            </section>
        </main>
    )
}