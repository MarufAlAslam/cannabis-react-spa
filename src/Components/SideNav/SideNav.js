import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './SideNav.css';

// menu icons
import dashboard from './dashboard.png';

const SideNav = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default SideNav;