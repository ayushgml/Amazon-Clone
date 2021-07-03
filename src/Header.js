import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
    const [,] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img 
                className="header__logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                alt=""
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__Nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="Header__optionline1">Hello</span>
                        <span className="Header__optionline2">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="Header__optionline1">Returns</span>
                        <span className="Header__optionline2">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="Header__optionline1">Your</span>
                        <span className="Header__optionline2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optioncart">
                        <ShoppingCartIcon className="header__basketIcon"/>
                        <span className="Header__cart">Cart</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
