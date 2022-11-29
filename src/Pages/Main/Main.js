import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../Components/SideNav/SideNav';

const Main = () => {
    return (
        <div className='row'>
            <div className='col-md-3 p-0'>
                <SideNav></SideNav>
            </div>
            <div className='col-md-9 p-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;