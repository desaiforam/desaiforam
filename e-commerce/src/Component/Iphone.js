import React from 'react'
import Images from '../utils/images'
import { RightDrop } from '../asset/images/svg'
const Iphone = () => {
  return (
    <>

      <div className="container d-flex gap-3">
    <div className='row row-iphone'>
        <ul className='list'>
            <div className='d-flex align-items-center justify-content-center'>
            <li>Woman’s Fashion 
            </li>
             <RightDrop />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <li>Men’s Fashion            
            </li>
            <RightDrop />
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
          <div className='line w-10 m-1'>
          <hr  className='line-height mt-0'/>
          </div>
      <div className='iphone14'>
            <div className="exclusive ">
            <div className='row d-flex align-items-center justify-content-center g-3'>
           <div className='col-5'>
            <div className='iphone'>
            <img src={Images.symbol} height="49" width="40" alt=''/>
            <h5>iPhone 14 Series</h5>
            </div>
            <div className='a-link mt-4'>
            <h2> Up to 10% off Voucher</h2>
            <a href='/' className='a-link mt-5' color='white'>Shop Now</a>
            <img src={Images.shopboy} height="30" width="30" alt=''/>
            </div>
            </div>
            <div className='col-6'>
            <div className='iphone-14pro'>

                <img src={Images.iphone}  alt=''/>
            </div>
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

// firestore database will success fully add and remove a addTocart and wishlidt data


// Will successfully add and remove cart and wishlist data to the database in FireStore
//The database in FireStore will successfully add and remove cart and wishlist data