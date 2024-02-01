import React from 'react'
import Navebar from './Navebar'
import Headers from './header'
import Footer from './Footer'
// import '../asset/style/notfound.scss'
const NotFound = () => {
  return (
    <div>
      <Navebar />
      <Headers />
      <hr />
      <div className=' container d-flex flex-column gap-5'>
       <div className=' d-flex flex-row justify-content-lrft gap-3'>
       <span style={{color:'#808080'}}>Home</span>
        <span style={{color:'#808080'}}>/</span>
        <span>404 Error</span>
       </div>
        <div className='error'>
        <span className='notfound'>404 Not Found</span>
        <span className='visitedhome'>Your visited page not found. You may go home page.</span>
        </div>
        <a href='/' >
            <button className='btn back-home mt-3' >Back to home page</button>
        </a>
      </div>



      <Footer />
    </div>
  )
}

export default NotFound
