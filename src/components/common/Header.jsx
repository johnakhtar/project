import React from 'react';
import { useDispatch } from 'react-redux';
import IconLogo from '../../assets/img/icon-logo.svg';
import { push } from 'connected-react-router';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <img class="logo" src={IconLogo} onClick={() => navigate('/')} alt="" />
                <div class="side-head">
                    <div class="search">
                        <input type="text" />
                    </div>
                    <div class="option">
                        <p onClick={() => navigate('/categories')}>Category</p>
                        <p onClick={() => navigate('/favourites')}>Add to Wishlist</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
