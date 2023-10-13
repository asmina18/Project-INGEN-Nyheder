import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

export const Navigation = () => (
    <nav className={style.navCantainer}>
        <div>
            <h1>INGEN</h1>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/alle">Alle</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/indland">Indland</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/udland">Udland</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/teknologi">Teknologi</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/sport">Sport</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/politik">Politik</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="category/samfund">Samfund</NavLink>
            {/* <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/login">Login</NavLink> */}
            <div className={style.svgStyle}>
                <BsFillPersonFill />
                <GiHamburgerMenu />
            </div>
        </div>
    </nav>
)
