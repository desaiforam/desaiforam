import React from 'react'
import CustomCard from './CustomCard'



const Products = ({ posts }) => {
    

    return (
        <div className='container flex-column'>
            <div className='ourproduct '>
                <div className='name flex-row w-100'>
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <span className='Today'> This Month</span>
                </div>
                <div className='d-flex flex-row w-100 justify-content-between  mb-0 '>
                    <div className='sales d-flex  gap-5 mt-2'>

                        <h3>Best Selling Products</h3>
                    </div>
                    <div className='arrow d-flex gap-2'>
                        <button className='btn btn-danger'>View All </button>
                    </div>
                </div>
            </div>
            <div className=' CustomCard  row mt-4'>

                {posts.map((item, index) => {
                    return (
                        <CustomCard item={item} index={index}  key={index}/>
                        
                    );
                })}
            </div>

        </div>


    )
}

export default Products
