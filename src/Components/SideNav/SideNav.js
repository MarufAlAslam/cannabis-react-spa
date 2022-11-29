import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './SideNav.css';
import { FaAngleRight } from 'react-icons/fa';

// menu icons
import dashboard from './dashboard.png';
import auction from './auction.png';
import marketplace from './marketplace.png';
import orders from './orders.png';
import settings from './settings.png';



const SideNav = () => {

    // click hasSubmenu li to show submenu

    const handleActiveState = (e) => {
        const target = e.target;
        // target.classList.toggle('active');

        // click target to make the parent li active
        target.parentNode.parentNode.classList.toggle('active');
    }


    return (
        <div>
            <div className='text-center p-4'>
                <img src={logo} alt="" className='img-fluid logo' />
            </div>
            <div className='bg-green text-center'>
                <p className='text-white fs-20 mb-0 fw-bold'>
                    Dispensary
                </p>
            </div>


            {/* menu */}
            <div className='menu'>
                <ul className='list-unstyled'>
                    <li className='menu-item'>
                        <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                            <img src={dashboard} alt="" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={`menu-item hasSubmenu`} onClick={handleActiveState}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button to='/' className='text-decoration-none text-dark sideMenuItem btn border-0 text-start'>
                                <img src={auction} alt="" />
                                <span>Auction</span>
                            </button>
                            <FaAngleRight className='text-2xl' />
                        </div>
                        <ul className='list-unstyled submenu'>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    All Production
                                </Link>
                            </li>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    My Proposals
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={`menu-item hasSubmenu`} onClick={handleActiveState}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button to='/' className='text-decoration-none text-dark sideMenuItem btn border-0 text-start'>
                                <img src={marketplace} alt="" />
                                <span>Marketplace</span>
                            </button>
                            <FaAngleRight className='text-2xl' />
                        </div>
                        <ul className='list-unstyled submenu'>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    All Production
                                </Link>
                            </li>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    My Proposals
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li className='menu-item'>
                        <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                            <img src={orders} alt="" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li className={`menu-item hasSubmenu`} onClick={handleActiveState}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button to='/' className='text-decoration-none text-dark sideMenuItem btn border-0 text-start'>
                                <img src={orders} alt="" />
                                <span>Events</span>
                            </button>
                            <FaAngleRight className='text-2xl' />
                        </div>
                        <ul className='list-unstyled submenu'>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    All Events
                                </Link>
                            </li>
                            <li className='submenu-item'>
                                <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                                    My Events
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <Link to='/' className='text-decoration-none text-dark sideMenuItem'>
                            <img src={settings} alt="" />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;