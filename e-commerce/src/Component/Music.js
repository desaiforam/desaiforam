import React from 'react'
import Images from '../utils/images'

const Music = (props) => {


  return (
    <div>
         <div className='music'>
      <div className='container'>
            <div className='row w-100' style={{background : "#000000"}}>
                <div className='col-5 p-5 mt-1 '>
                        <span className='mt-3 mb-4  d-flex'  style={{color: "#00FF66"}}>Categories</span>
                    <div className='enhances mb-3'>
                        <span >Enhance Your Music Experience</span>
                    </div>        
                    <div className='flash mb-2'>
                     <div className='sell '>
                      <span>23</span>
                      <span>Hours</span>
                     </div>
                     <div className='sell'>
                      <span>05</span>
                      <span>Days</span>
                     </div>
                     <div className='sell'>
                      <span>59</span>
                      <span>Minutes</span>
                     </div>
                     <div className='sell'>
                      <span>35</span>
                      <span>Seconds</span>
                     </div>

                    </div>
                    <div className='buynow mt-3'>
                        <button className='btn btn-success p-2' >Buy Now!</button>
                    </div>
                </div>
                <div className='col-7 '>
                    <div className='jbl'>
                      <div className='redius'>
                        <img src={Images.jbl}  alt='' />
                      </div>
                    <div className='ellipse '>
                                  {/* <p> sdjjdnnajsn</p> */}
                    </div>
                      
                     </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Music
