import React from 'react'
import Images from '../utils/images';

import CustomCard from './CustomCard';


const Ourproduct = ({ posts }) => {


    return (
        <div>

            <div className='container flex-column '>
                <div className='ourproduct' >
                    <div className='name flex-row w-100'>
                        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="40" rx="4" fill="#DB4444" />
                        </svg>
                        <span className='Today'> Our product</span>
                    </div>
                    <div className='d-flex flex-row w-100 justify-content-between  mb-0 '>
                        <div className='sales d-flex gap-5 mt-2'>
                            <h3>Explore Our Products</h3>
                        </div>
                        <div className='arrow d-flex gap-2'>
                            <img src={Images.arrow_left} height="30px" width="30px" alt='' />
                            <img src={Images.arrow_right} height="30px" width="30px" alt='' />
                        </div>
                    </div>
                </div>
                <div className='container '>
                    <div className='ourproduct CustomCard'>
                        <div className='row m-0'>
                            {posts.map((item, index) => {
                                return (
                                    // <ProductCard item={item} index={index} />
                                     <CustomCard item={item} index={index}  key={index}/>
                                );
                            })}
                            <div className='column'>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='view d-flex flex-row justify-content-center align-items-center'>
                    <button className="btn btn-danger mt-5" fdprocessedid="jrgvha">View All Products</button>
                </div>
            </div>



        </div>
    )
}

export default Ourproduct
