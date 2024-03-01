import React from 'react'
import Navbar from './Navbar'
import Headers from './header'
import Footer from './Footer'
import CustomCard from './CustomCard'
import { useSelector } from 'react-redux'




const Wishlist = (id) => {

    const { WishList ,listOfProduct} = useSelector((state) => state.Auth)
    const listAdded = WishList.map((id) =>
    listOfProduct.find((product) => product.id === id)
  );
    return (
        <div>
            <Navbar />
            <Headers />
            <hr w-100 ></hr>
            <div className='container d-flex flex-column'>
                <div className='wishlidtcart'>


                    <div className='wishlist d-flex' >
                        <span>wishlist({Wishlist.length})</span>
                        {WishList.length > 0 && <div className='position-absolute wishlist-count' ></div>}
                        <button>Move All To Bag</button>
                    </div>
                </div>
                <div className='container CustomCard p-1  mt-2 mb-4 row'>
                    {listAdded && listAdded.map((item, index) => {
                        return <CustomCard item={item} wishlist={true}  />

                    })}
                </div>
                <div className='justforyou'>
                    <div className='justyou d-flex' >
                        <span className='justfor'>
                            <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="40" rx="4" fill="#DB4444" />
                            </svg>
                            Just For You</span>
                        <button>See All</button>                   
                    </div>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist
