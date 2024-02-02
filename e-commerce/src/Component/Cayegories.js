import React from 'react'
import Images from '../utilis/images'
import CumstCard2 from './CumstCard2'
import { PhoneIcon,ComputerIcon,SmartWatch,Camera,HeadPhone,Gaming } from '../asset/images/svg'



const card2 = [{ img:<PhoneIcon/>, value: "phone" },
{ img:<ComputerIcon/>, value: "computer" },
{ img:<SmartWatch/>, value: "SmartWatch" },
{ img:<Camera/>, value: "camera" },
{ img: <HeadPhone/>, value: "HeadPhone" },
{img:<Gaming/>, value: "Gaming"}

]

const Cayegories = () => {


  return (
    <div>
      <div className='container flex-column'>

        <div className='name flex-row w-100'>
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
          <span className='Today'> Categories</span>
        </div>

        <div className='d-flex flex-row w-100 justify-content-between'>
          <div className='sales d-flex gap-5'>

            <h3>Browse By Category</h3>
          </div>
        <div className='arrow d-flex gap-2'>
            <img src={Images.arrow_left} height="30px" width="30px"  alt=''/>
            <img src={Images.arrow_right} height="30px" width="30px" alt='' />
          </div>
      </div>
        </div>

      <div className='container'>
        <div className='row w-100'>
          {card2.map((items, index) => {
            return (
              <CumstCard2 items={items} />
            );

          })}
        </div>
      </div>
            {/* <div className='conntainer'>
          <Carousel itemsToShow={6} pagination={false} >
            {card2.map((items, index) => (
      <div className="carousel-wrapper d-flex">
                <CumstCard2 items={items}  />
              </div>
            ))}
          </Carousel>

        </div> */}

    </div>
  )
}

export default Cayegories
