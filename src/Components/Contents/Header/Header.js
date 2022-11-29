import React from 'react';
import { Link } from 'react-router-dom';
import notification from './notification.png'
import message from './message.png'
import user from './user.png'
import signout from './signout.png'
import { FaBars } from 'react-icons/fa';
import '../Content.css';

const Header = ({ toggleSideNav }) => {
    return (
        <div className='d-flex justify-content-between align-items-center px-3 py-4 mainHeader'>
            <div className='d-flex align-items-center justify-content-start'>
                <p className='fs-14 mb-0'>
                    <span className='text-muted'>Auction</span> / All Auction
                </p>
            </div>

            <div className='d-flex flex-row justify-content-end align-items-center right-nav'>
                <Link to='/'>
                    <img src={notification} alt="" />
                </Link>
                <Link to='/'>
                    <img src={message} alt="" />
                </Link>
                <Link to='/'>
                    <img src={user} alt="" />
                </Link>
                <Link to='/'>
                    <img src={signout} alt="" />
                </Link>
                <button className='btn menuToggler' onClick={toggleSideNav}>
                    <FaBars />
                </button>
            </div>
        </div>
    );
};

export default Header;