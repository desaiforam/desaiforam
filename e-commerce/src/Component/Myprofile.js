import React from 'react'
import Navbar from './Navbar'
import Headers from './header'
import Footer from './Footer'

const Myprofile = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <div className='container  d-flex flex-column'>

        <span className='d-flex mt-5 mb-5'>Home/ My Account </span>

        <div className='d-flex w-100'>
          <div className='lisiofmanage mt-5'>
            <div className='profillist'>
              <h4 className='d-flex'> Manage My Account</h4>
              <div className='list'>
                <li>My profile</li>
                <li> Address Book </li>
                <li> Mt Payment Options</li>
              </div>
            </div>
            <div className='profillist'>
              <h4 className='d-flex'>My Orders</h4>
              <div className='list'>
                <li>My Returns</li>
                <li> My Cancellations </li>

              </div>
            </div>
            <div className='profillist'>
              <h4 className='d-flex'>My WishList</h4>
            </div>
          </div>
          <div className='editprofile'>
            <form action="#">
              <div className='firstname mt-3'>
                <div className='d-flex flex-column w-100'>
                  <span htmlfor="fname">First Name:</span>
                  <input type="text" name="fname" id="fname" required />
                </div>
                <div className='d-flex flex-column w-100'>
                  <label htmlfor="lname">Last Name:</label>
                  <input type="text" name="lname" id="lname" required />
                </div>
              </div>

              <div className='emailenter mt-3'>

                <div className='d-flex flex-column w-100'>
                  <span htmlfor="email">Email Id:</span>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className='d-flex flex-column w-100'>
                  <span htmlfor="text">Address</span>
                  <input type="text" name="text" id="text" required />
                </div>
              </div>

              <div className='password mt-3'>
                <span htmlFor='passwordchanges '>
                    Password Changes
                </span>
                <input type="password" name="email" id="email" required placeholder='Current Passwod'/>
                <input type="password" name="email" id="email" required placeholder='New Passwod'/>
                <input type="password" name="email" id="email" required placeholder='Confirm New Passwod'/>
              </div>


              <div className='changes mt-4'>
              <input type="submit" value="Cancel" style={{border:'0'}} />
                <button className='btn btn-change'>Save Changes</button>
              </div>
            </form>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Myprofile
