import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to="/" className='header__link'>Каталог</Link>
                    <Link to="/client" className='header__link'>Наши клиенты</Link>
                </div>
            </header>

        </>
    )
}