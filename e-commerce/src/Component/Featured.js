import React from 'react'
import Images from '../utils/images'

const Featured = () => {
    return (
        <div className='container'>
            <div className='featured' >

                <div className='name '>
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <span className='Today'>Featured</span>
                </div>

                <div className='d-flex flex-row w-100 justify-content-between mb-0 '>
                    <div className='sales d-flex gap-5 mt-2'>

                        <h3>
                            New Arrival
                        </h3>
                    </div>
                </div>
                <div className='row row-shopping '>
                    <div className='col-5 p-0 position-relative'>
                        <div className='ps6'>
                            <img src={Images.station} width="100%" height="100%" alt='' />
                        </div>
                        <div className='playStation position-absolute col-2'>
                            <h3>Play Station  5</h3>
                            <span>Black and White version of the PS5 coming out on sale.</span>
                            <a href='/' className='shop mt-3' >Shop Now</a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row row-shopping'>

                            <div className='women  position-relative'>
                                <img src={Images.women} alt=''/>
                                <div className='collections  col-5'>
                                    <h5>Women’s Collections</h5>
                                    <span>Featured woman collections that give you another vibe.</span>
                                    <a href='/' className='shop'>Shop Now</a>
                                </div>
                            </div>
                            <div className='row row-shopping'>
                                <div className='amazon'>

                                    <div className='ster position-relative'>
                                        <img src={Images.speakers} alt=''/>
                                        <div className='speakers'>
                                            <h6>Speakers</h6>
                                            <span>Amazon wireless speakers</span>
                                            <a href='/' className='shop '>Shop Now</a>
                                        </div>
                                        </div>
                                        <div className='ster position-relative'>
                                            <img src={Images.gucci} alt='' />
                                            <div className='speakers'>
                                                <h6>Parfume</h6>
                                                <span>GUCCI INTENSE OUD EDP.</span>
                                                <a href='/' className='shop'>Shop Now</a>
                                    </div>
                                        </div>
                                      
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Featured
