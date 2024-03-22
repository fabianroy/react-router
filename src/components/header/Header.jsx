import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Web</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;