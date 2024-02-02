import React from 'react'
import Images from '../utilis/images'
import CumstCard from './CumstCard'
import Carousel from 'react-elastic-carousel'


const ToDays = ({ posts }) => {
  // console.log('posts', posts)



  return (
    <>
      <div className='container flex-column'>

        <div className='name flex-row w-100'>
          {/* <img src={Images.rectangle} height="40" width="40" /> */}
          <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
          <span className='Today'> Today’s</span>
        </div>

        <div className='d-flex flex-row w-100 justify-content-between  align-items-end'>
          <div className='sales d-flex align-items-end gap-5 mb-0'>

            <h3 className='mb-0 '>Flash Sales</h3>
            <div className='timer d-flex flex-row gap-4 align-items-center mb-0'>
              <div>
                <h6>Days </h6>
                <h3 className='mb-0'>03</h3>
              </div>
              <div className='d-flex flex-column gap-3 '>
                <img src={Images.doteed} width="10" height="10" alt='' />
                <img src={Images.doteed} width="10" height="10" alt='' />
              </div>
              <div>
                <h6>Hours </h6>
                <h3 className='mb-0'>23</h3>
              </div>
              <div className='d-flex flex-column  gap-3 '>
                <img src={Images.doteed} width="10" height="10" alt='' />
                <img src={Images.doteed} width="10" height="10" alt='' />
              </div>
              <div>
                <h6>Minutes </h6>
                <h3 className='mb-0'>19</h3>
              </div>
              <div className='d-flex flex-column gap-3 '>
                <img src={Images.doteed} width="10" height="10" alt='' />
                <img src={Images.doteed} width="10" height="10" alt='' />
              </div>
              <div>
                <h6>Seconds </h6>
                <h3 className='mb-0'>56</h3>
              </div>
            </div>
          </div>

          
        </div>


        <div className="carousel-wrapper d-flex">
          <Carousel itemsToShow={4} pagination={false} >
            {posts.map((item, index) => (
              <div className='conntainer'>
                <CumstCard item={item} slider index={index} />
              </div>
            ))}
          </Carousel>

        </div>


      </div>
      <button className='btn btn-danger mt-5' style={{ height: "20", width: "20", align_item: "center" }}>View All Products</button>

    </>
  )
}

export default ToDays
