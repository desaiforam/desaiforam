import React from 'react'
import Images from '../../utilis/images'
const navfooter = () => {
  return (
    <div>
      <>
      <div className='topheader'>
      <header className='Header'> 
        <p >
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p><br></br><br></br>
      <a href='/'className='link' >ShopNow</a>
      <br></br>
        </header> 
      <div className='drop mt-2'>
      <p className='english'>English </p>
      <img src={Images.list} className='image'/>
      </div>
    </div>

    <div className='footer'>
    <div className='container-fluid'>

      <div className='row'>
              <div className='col-sm-2'>
              <div className='exclisive'>
              <div className=''>
              <img src={Images.exclusive} />
              <h5>Subscribe</h5>
              </div>
              <p className='text'>Get 10% off your first order</p>
              <label htmlfor="email">Enter your email:</label>
              <input type="email" id="email" name="email" />

              </div>
              </div>
              <div className='col-sm-2'>
              <div className='support'>
              <h5>Support</h5 >
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p> exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>

              </div>
              </div>
              <div className='col-sm-2'>
              <p>Account</p>
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p> Wishlist</p>
              <p>Shop</p>

              </div>
        <div className='col-sm-2'>
                 <p>Quick Link</p>
            <div className='p'>
              <p>Privacy Policy</p>
              <p> Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
        <div className='col-sm-3'>
            <p>Download App</p>
              <img src={Images.qrcoded} />
    </div>


</div>
    
    <div className='frame'>
    <img src={Images.ul} />
      <p>
      Copyright Rimel 2022. All right reserved
      </p>
    </div>

</div>

    </div>
    </>
    </div>
  )
}

export default navfooter
