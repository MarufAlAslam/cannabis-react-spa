import React from 'react';
import FilterCard from './FilterCard/FilterCard';

const ContentBody = () => {
    return (
        <div className='p-4 bg-light'>
            <h2 className='fs-24 fw-5'>
                Auction
            </h2>
            <p className='fs-14'>
                Explore and bid on your desired product based on several filters
            </p>

            <div className='row'>
                <div className='col-lg-3'>
                    <FilterCard></FilterCard>
                </div>
            </div>
        </div>
    );
};

export default ContentBody;