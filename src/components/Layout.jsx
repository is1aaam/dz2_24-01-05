import {NavLink,Outlet} from "react-router-dom";

const activeMenu = ({isActive}) => isActive ? 'active-menu' : ''

const   Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            className=
                                {activeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/login'}
                            className=
                                {activeMenu}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/posts'}
                            className=
                                {activeMenu}>
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/abc'}
                            className=
                                {activeMenu}>
                            404
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="container">
                <Outlet/>
            </div>
            <footer>Geeks 2023</footer>
        </>
    )
}

export default Layout