import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Header Component</h1>
            <NavLink to="/">Home</NavLink>{' '}
            <NavLink to="/favorite-dog">Favorite Dog</NavLink>{' '}
            <NavLink to="/least-favorite-dog">Least Favorite Dog</NavLink>{' '}
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Header;