import React from 'react'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Hello</span>
                        <span className="header__optionsLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Returns </span>
                        <span className="header__optionsLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Your</span>
                        <span className="header__optionsLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionsLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
