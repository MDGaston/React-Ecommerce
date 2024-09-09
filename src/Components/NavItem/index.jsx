import { NavLink } from "react-router-dom"
// eslint-disable-next-line react/prop-types
function NavItem ({className, to,isActiveStyle,activeStyle,navbarName, onClick }) {
    return (
        <li className={className}>
            <NavLink to={to}
            className={({ isActive }) =>
            isActive && isActiveStyle ? activeStyle : undefined
        }
        onClick={() => onClick && onClick(navbarName)}
            >
                {navbarName}
            </NavLink>
        </li>
    )
}

export default NavItem