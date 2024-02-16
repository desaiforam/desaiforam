import React from 'react'
import Images from '../utils/images'
const Iphone = () => {
  return (
    <>

      <div className="container">
    <div className='row row-iphone'>
        <ul className='list'>
            <div className='d-flex'>
            <li>Woman’s Fashion 
            </li>
              <img src={Images.dropdown} height="15" width="15" className='mt-2' alt=''/>
            </div>
            <div className='d-flex'>
            <li>Men’s Fashion            
            </li>
            <img src={Images.dropdown} height="15" width="15" className='mt-2' alt=''/>
            </div>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        </div>
          <div className='line h-100 w-10 m-1'style={{background : "gray"}}/>
      <div className='iphone14'>
            <div className="exclisive ">
            <div className='row d-flex align-items-center g-3'>
           <div className='col-5'>
            <div className='iphone'>
            <img src={Images.symbol} height="49" width="40" alt=''/>
            <h5>iPhone 14 Series</h5>
            </div>
            <div className='alink mt-4'>
            <h2> Up to 10% off Voucher</h2>
            <a href='/' className='alink mt-5' color='white'>Shop Now</a>
            <img src={Images.shopboy} height="30" width="30" alt=''/>
            </div>
            </div>
            <div className='col-6'>
                <img src={Images.iphone} height="352px" width="496px" alt=''/>
           </div>
           {/* <img src={Images.Ellipse} width="5" height="5" opacity="50%" /> */}
           </div>
            </div>
           </div>
            </div>

       

  </>
      


   
  )
}

export default Iphone
