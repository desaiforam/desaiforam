import React from 'react'
import Navbar from '../../Component/Navebar'
import Headers from '../../Component/header'
import Footer from '../../Component/Footer'
import {Contactus, Message} from '../../asset/images/svg'




const Contact = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <div className=' container d-flex flex-column'>
      <div className='about d-flex'>
          <span>Home</span>
          <span>/</span>
          <span>content</span>
        </div>
       
        <div className='contectdetails d-flex flex-row w-100'>
        <div className='aboutus'>
        <div className='callus mt-5'>
          <div className='callto'>
          <Contactus />
          <span> Call To Us</span>
        </div>
         <div className='available'>
         <span>We are available 24/7, 7 days a week.</span>
          <span>Phone: +8801611112222</span>
         </div>
          </div>
          <hr />
        <div className='writeto'>
          <div className='writeuS '>
            <Message />
            <span> Write To US</span>
          </div>
          <div className='emails'>
            <span>Fill out our form and we will contact you within 24 hours.</span>
            <span>Emails: customer@exclusive.com</span>
            <span>Emails: support@exclusive.com</span>
          </div>
        </div>
        </div>
        <div className='sendingmsg'>
          <div className='firstname w-100'>
            <input type='text' name='Your Name' placeholder='Your Name' />
          <input type='email' name='Your Email ' placeholder='Your Email ' />
          <input type='number' name='Your Phone' placeholder='Your Phone' />
          
          </div>
          <div className='yourmessage d-flex'>
            <textarea type='text' name='Your Massage' rows="8" placeholder='Your Massage' />
          </div>
          <div className='button d-flex justify-content-end'>
            <button className='btn btn-danger' >Send Massage</button>
          </div>
        </div>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Contact
