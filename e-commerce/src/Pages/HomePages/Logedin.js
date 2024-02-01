import React from 'react'
import Navebar from '../../Component/Navebar'
import Header from '../../Component/header'
import Footer from '../../Component/Footer'
import Images from '../../utilis/images'

const Logedin = () => {
  return (
    <div>
      <Navebar />
            <Header />
            <hr className='w-100' />
            <div className='container w-100' style={{ marginLeft: '0' }}>
                <div className='login  w-100'>
                    <div className='row w-100'>
                        <div className='col-7'>
                            <div className='bag'>
                                <img src={Images.singup} height="760px" />
                            </div>
                        </div>
                        
                        <div className='col-5'>
                            <div className='form'>
                                <div className='detalis'>
                                    <span className='acc' style={{ fontSize: 'xxx-large', fontWeight: '600' }}>Log in</span>
                                    <span>Enter your details below</span>
                                </div>
                                <div className="form__group field">
                                    
                                    <input type="input" className="form__field" placeholder="Email or Phone Number" value={''} name="" id="" required />
                                    <input type="input" className="form__field" placeholder="Password" value={''} name="" id="name" required />
                                </div>
                                <div className='login mt-5'>
                                    <div className='buttoncreate'>
                                        <button className="btn">Create Account</button>
                                    </div>
                                       <div className='password'>
                                       <span className=' d-flex flex-column justify-content-center'>Forget Password?</span>
                                       </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
    </div>
  )
}

export default Logedin
