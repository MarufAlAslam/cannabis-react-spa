import React from 'react';
import './Products.css';

import awarded from './awarded.png';
import closed from './closed.png';
import pending from './pending.png';
import bid from './bid.png';

const Products = () => {


    /* 
    <a href="https://ibb.co/YtH7kZs"><img src="https://i.ibb.co/K9Tjqwv/1.png" alt="1" border="0"></a>
    <a href="https://ibb.co/WngyWd1"><img src="https://i.ibb.co/SNRnX1p/2.png" alt="2" border="0"></a>
    <a href="https://ibb.co/0Qfz7zK"><img src="https://i.ibb.co/pn3k7kQ/3.png" alt="3" border="0"></a>
    <a href="https://ibb.co/hLw8VFL"><img src="https://i.ibb.co/0mvJrym/4.png" alt="4" border="0"></a>
    <a href="https://ibb.co/znbh4qV"><img src="https://i.ibb.co/YR87LHB/5.png" alt="5" border="0"></a>
    <a href="https://ibb.co/YtH7kZs"><img src="https://i.ibb.co/K9Tjqwv/1.png" alt="1" border="0"></a>
    */

    // create a json object for the products data
    const products = [
        {
            id: 1,
            title: 'ACDC #08 Outdoor',
            subtitle: 'The Green Bull 2 LLC',
            thc: 10,
            cbd: 23,
            askingPrice: "$600.00/lb",
            status: 'awarded',
            image: 'https://i.ibb.co/K9Tjqwv/1.png'
        },
        {
            id: 2,
            title: 'ACDC #08 Outdoor',
            subtitle: 'WCW Enterprises, LLC',
            thc: 10,
            cbd: 23,
            askingPrice: "$1100.00/lb",
            status: 'closed',
            image: 'https://i.ibb.co/SNRnX1p/2.png'
        },
        {
            id: 3,
            title: 'ACDC #08 Outdoor',
            subtitle: 'WCW Enterprises, LLC',
            thc: 10,
            cbd: 23,
            askingPrice: "$800.00/lb",
            status: 'awarded',
            image: 'https://i.ibb.co/pn3k7kQ/3.png'
        },
        {
            id: 4,
            title: 'ACDC #08 Outdoor',
            subtitle: 'Gold Leaf Acres, LLC',
            thc: 10,
            cbd: 23,
            askingPrice: "$650.00/lb",
            status: 'pending',
            image: 'https://i.ibb.co/0mvJrym/4.png'
        },
        {
            id: 5,
            title: 'ACDC #08 Outdoor',
            subtitle: 'Pong Thao',
            thc: 10,
            cbd: 23,
            askingPrice: "$790.00/lb",
            status: 'pending',
            image: 'https://i.ibb.co/YR87LHB/5.png'
        },
        {
            id: 6,
            title: 'ACDC #08 Outdoor',
            subtitle: 'Loud Factory, LLC',
            thc: 10,
            cbd: 23,
            askingPrice: "$600.00/lb",
            status: 'pending',
            image: 'https://i.ibb.co/K9Tjqwv/1.png'
        },
    ];





    return (
        <>
            {
                products.map(product => (
                    <div key={product.id} className='card border-0 rounded-0 mb-3'>
                        <div className='card-body'>
                            <table className='table mb-0 productTable'>
                                <tbody>
                                    <tr>
                                        <td className='align-middle border-0'>
                                            <img src={product.image} className="img-fluid" alt="" />
                                        </td>
                                        <td className='align-middle border-0 border-end'>
                                            <p className='fs-14 mb-0'>
                                                {product.title}
                                            </p>
                                            <p className='fs-14 mb-0 text-muted'>
                                                {product.subtitle}
                                            </p>
                                        </td>
                                        <td className='align-middle border-0 border-end'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className='fs-8 text-muted'>
                                                    THC
                                                </span>
                                                <span className='text-muted fs-8'>
                                                    {product.thc}%
                                                </span>
                                            </div>
                                            <div className='custom-progress'>
                                                <div className='custom-bar' style={{ width: product.thc + '%' }}></div>
                                            </div>


                                            <div className='d-flex justify-content-between align-items-center mb-1 mt-3'>
                                                <span className='fs-8 text-muted'>
                                                    CBD
                                                </span>
                                                <span className='text-muted fs-8'>
                                                    {product.cbd}%
                                                </span>
                                            </div>
                                            <div className='custom-progress'>
                                                <div className='custom-bar' style={{ width: product.cbd + '%' }}></div>
                                            </div>
                                        </td>

                                        <td className='align-middle text-center border-0 border-end'>
                                            <p className='fs-12 text-muted mb-0'>
                                                Asking Price
                                            </p>
                                            <p className='mb-0 fw-semibold'>
                                                {product.askingPrice}
                                            </p>
                                        </td>

                                        <td className='align-middle text-center border-0 border-end'>
                                            {
                                                product.status === 'awarded' ?
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <img src={awarded} className="me-2" alt="" />
                                                        <span className='text-green fs-10'>
                                                            Awarded
                                                        </span>
                                                    </div>
                                                    :
                                                    product.status === 'closed' ?
                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <img src={closed} className="me-2" alt="" />
                                                            <span className='text-danger fs-10'>
                                                                Closed
                                                            </span>
                                                        </div>
                                                        :
                                                        product.status === 'pending' ?
                                                            <div className='d-flex align-items-center justify-content-center'>
                                                                <img src={pending} className="me-2" alt="" />
                                                                <span className='text-warning fs-10'>
                                                                    Pending
                                                                </span>
                                                            </div>
                                                            :
                                                            null

                                            }
                                        </td>

                                        <td className='align-middle text-center border-0'>
                                            <button className='btn btn-green'>
                                                <img src={bid} alt="" /> Bid
                                            </button>
                                            <button className='btn w-100 d-block viewBtn rounded-0'>
                                                View
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Products;