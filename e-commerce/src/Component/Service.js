import React from 'react'
import Images from '../utilis/images'

const Service = () => {
  return (
    
      <div className='container w-100 d-flex justify-content-center'> 
        <div className='service mt-5 mb-5'>
          <div className='row h-100'>
            <div className='col-4 d-flex flex-column align-items-center justify-content-center gap-2' >
              <div className='img-outter-leyer'>
                <div className='img-leyer'>
                <img src={Images.fast} style={{height :"55px"}} alt=''/>
                </div>
              </div>
              <div className='delivery d-flex flex-column align-items-center justify-content-center  gap-2'>
                <span className='fasttext'>FREE AND FAST DELIVERY</span>
              <span className='orders'>Free delivery for all orders over $140</span>
              </div>
            </div>
            <div className='col-4 d-flex flex-column align-items-center justify-content-center gap-2'  >
              <div className='img-outter-leyer'>
                <div className='img-leyer'>
                <img src={Images.friend} style={{height :"55px"}}  alt=''/>
                </div>
              </div>
              <div className='delivery d-flex flex-column align-items-center justify-content-center  gap-2'>
                <span className='fasttext'>24/7 CUSTOMER SERVICE</span>
              <span className='orders'>Friendly 24/7 customer support</span>
              </div>
            </div>
            <div className='col-4 d-flex flex-column align-items-center justify-content-center gap-2' >
              <div className='img-outter-leyer'>
                <div className='img-leyer'>
                <img src={Images.money} style={{height :"55px"}} alt=''/>
                </div>
              </div>
              <div className='delivery d-flex flex-column align-items-center justify-content-center  gap-2'>
                <span className='fasttext'>MONEY BACK GUARANTEE</span>
              <span className='orders'>We reurn money within 30 days</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    
  )
}

export default Service
