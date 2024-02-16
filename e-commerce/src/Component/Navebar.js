import React from 'react'
import Images from '../utilis/images'


function Navbar() {
  return (
    
    
      <>
       <div className='topheader'>
      <header className='Header'> 
        <p className='Summer pt-1' >
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <a href='/'className='link' >ShopNow</a>
      <br></br>
        </header> 
      <div className='drop mt-2'>
      <p className='english'>English </p>
      <img src={Images.list} className='list' alt=''/>
      
      </div>
    </div>
      
      </>
    
  )
}

export default Navbar
