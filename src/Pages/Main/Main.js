import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../Components/SideNav/SideNav';

const Main = () => {

    const [customClass, setCustomClass] = useState('');


    const toggleSideNav = () => {
        if (customClass === '') {
            setCustomClass('activee');
        } else {
            setCustomClass('');
        }
    }


    return (
        <div className='row'>
            <div className={`col-md-3 p-0 sidebar ${customClass}`}>
                <SideNav></SideNav>
            </div>
            <div className='col-md-9 p-0 main'>
                <Outlet context={toggleSideNav}></Outlet>
            </div>
        </div>
    );
};

export default Main;