import React, { useState } from 'react';
import location from './location.png'
import category from './category.png'
import dollar from './dollar.png'
import strain from './strain.png'
import cultivation from './cultivation.png'
import './FilterCard.css'
import MultiRangeSlider from "multi-range-slider-react";

const FilterCard = () => {
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(3000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const [active, setActive] = useState("inactive");



    const toggleClass = (e) => {
        const btn = e.target;
        const btns = document.querySelectorAll(".filter-btn");
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
    }

    const toggleClass1 = (e) => {
        const btn = e.target;
        const btns = document.querySelectorAll(".filter-btn-1");
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
    }

    return (
        <div>
            <div className='card rounded-0 border-0'>
                <div className='card-body'>
                    <form>

                        <div className='d-flex align-items-center'>
                            <p className='fs-14 fw-5 mb-0'>
                                Location
                            </p>
                            <img src={location} className="ms-3 img-fluid" alt="" />
                        </div>
                        <hr />


                        <select className='form-select fs-14 rounded-0'>
                            <option value="Tulsa" key="">Tulsa</option>
                            <option value="Tulsa" key="">Tulsa</option>
                            <option value="Tulsa" key="">Tulsa</option>
                        </select>


                        <div className='d-flex align-items-center mt-5'>
                            <p className='fs-14 fw-5 mb-0'>
                                Category
                            </p>
                            <img src={category} className="ms-3 img-fluid" alt="" />
                        </div>
                        <hr />

                        {/* checkboxes */}
                        <div className="form-check position-relative my-3">
                            <input className="form-check-input" type="checkbox" value="" id="all" />
                            <span className='checkmark'></span>
                            <label className="form-check-label fs-14 fw-semibold" for="all">
                                All
                            </label>
                        </div>

                        <div className="form-check position-relative my-3">
                            <input className="form-check-input" type="checkbox" value="" id="flowers" />
                            <span className='checkmark'></span>
                            <label className="form-check-label fs-14 fw-semibold" for="flowers">
                                Flowers
                            </label>
                        </div>


                        <div className="form-check position-relative my-3">
                            <input className="form-check-input" type="checkbox" value="" id="Trims" />
                            <span className='checkmark'></span>
                            <label className="form-check-label fs-14 fw-semibold" for="Trims">
                                Trims
                            </label>
                        </div>

                        <div className="form-check position-relative my-3">
                            <input className="form-check-input" type="checkbox" value="" id="Biomass" />
                            <span className='checkmark'></span>
                            <label className="form-check-label fs-14 fw-semibold" for="Biomass">
                                Biomass
                            </label>
                        </div>

                        <div className="form-check position-relative my-3">
                            <input className="form-check-input" type="checkbox" value="" id="Oils" />
                            <span className='checkmark'></span>
                            <label className="form-check-label fs-14 fw-semibold" for="Oils">
                                Oils
                            </label>
                        </div>


                        <div className='d-flex align-items-center mt-5'>
                            <p className='fs-14 fw-5 mb-0'>
                                Price
                            </p>
                            <img src={dollar} className="ms-3 img-fluid" alt="" />
                        </div>
                        <hr />


                        <div className='d-flex justify-content-between align-content-center'>
                            <span className='fs-14 fw-semibold text-muted'>
                                $0
                            </span>
                            <span className='fs-14 fw-semibold text-muted'>
                                $5000
                            </span>
                        </div>


                        <MultiRangeSlider
                            min={0}
                            max={5000}
                            step={100}
                            ruler={false}
                            label={false}
                            preventWheel={false}
                            minValue={minValue}
                            maxValue={maxValue}
                            onInput={(e) => {
                                handleInput(e);
                            }}
                        />


                        <div className='d-flex align-items-center mt-5'>
                            <p className='fs-14 fw-5 mb-0'>
                                Strain
                            </p>
                            <img src={strain} className="ms-3 img-fluid" alt="" />
                        </div>
                        <hr />

                        <div className='btn-group w-100'>
                            <button onClick={toggleClass} type="button" className="active btn filter-btn btn-outline-secondary rounded-0 fs-14 fw-semibold">Indica</button>
                            <button onClick={toggleClass} type="button" className="btn filter-btn btn-outline-secondary rounded-0 fs-14 fw-semibold">Sativa</button>
                            <button onClick={toggleClass} type="button" className="btn filter-btn btn-outline-secondary rounded-0 fs-14 fw-semibold">Hybrid</button>
                        </div>



                        <div className='d-flex align-items-center mt-5'>
                            <p className='fs-14 fw-5 mb-0'>
                                Cultivation Type
                            </p>
                            <img src={cultivation} className="ms-3 img-fluid" alt="" />
                        </div>
                        <hr />

                        <div className='btn-group w-100'>
                            <button onClick={toggleClass1} type="button" className="active btn filter-btn-1 btn-outline-secondary rounded-0 fs-14 fw-semibold">All</button>
                            <button onClick={toggleClass1} type="button" className="btn filter-btn-1 btn-outline-secondary rounded-0 fs-14 fw-semibold">Indoor</button>
                            <button onClick={toggleClass1} type="button" className="btn filter-btn-1 btn-outline-secondary rounded-0 fs-14 fw-semibold">Outdoor</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default FilterCard;