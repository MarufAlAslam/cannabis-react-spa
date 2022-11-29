import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ContentBody from './ContentBody/ContentBody';
import Header from './Header/Header';

const Contents = () => {
    const toggleSideNav = useOutletContext()
    return (
        <div>
            <Header toggleSideNav={toggleSideNav}></Header>

            {/* content body */}

            <ContentBody></ContentBody>
        </div>
    );
};

export default Contents;