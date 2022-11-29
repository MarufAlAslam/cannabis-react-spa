import React from 'react';
import FilterCard from './FilterCard/FilterCard';
import Products from './Products/Products';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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
                <div className='col-lg-9'>
                    <Products></Products>
                </div>
            </div>

            <div className='text-center mt-5'>
                {/* pagination buttons */}
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>
                        <FaAngleLeft />
                    </button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>1</button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>2</button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>3</button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>4</button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>5</button>
                    <button className='btn btn-outline-dark mx-2 rounded-0'>
                        <FaAngleRight />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ContentBody;