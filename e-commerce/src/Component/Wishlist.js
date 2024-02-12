import React from 'react'
import Navebar from './Navebar'
import Headers from './header'
import Footer from './Footer'
// import Images from '../utilis/images'
import CumstCard from './CumstCard'
import { useSelector } from 'react-redux'


// const cardSecound =
//     [{ image: Images.gameingleptop, title: "ASUS FHD Gaming Laptop", FillEye: true, star: true, buttoncolor: "#DB4444", count: "(65)", price: "$565", price2: "$1160", button: "-35%", iscart: true },
//     { image: Images.leptop, title: "IPS LCD Gaming Monitor", FillEye: true, star: true, price: "$1160 ", value3: "(65)", iscart: true },
//     { image: Images.Gamepad, title: "HAVIT HV-G92 Gamepad", FillEye: true, star: true, button: "new", buttoncolor: "#00FF66", value3: "(65)", price: "$560 ", iscart: true },
//     { image: Images.Keyboard, title: "AK-900 Wired Keyboard", FillEye: true, star: true, price: "$200 ", value3: "(65)", iscart: true }

//     ]

const Wishlist = () => {

    const { wishlist} = useSelector((state) => state.Auth)
    // console.log('wishlist', wishlist);

    return (
        <div>
            <Navebar />
            <Headers />
            <hr w-100 ></hr>
            <div className='container d-flex flex-column'>
                <div className='wishlidtcart'>


                    <div className='wishlist d-flex' >
                        <span>wishlist({wishlist.length})</span>
                        {wishlist.length > 0 && <div className='position-absolute wishlist-count' ></div>}
                        <button>Move All To Bag</button>
                    </div>
                </div>
                <div className='container CumstCard p-1  mt-2 mb-4 row'>
                    {wishlist && wishlist.map((item, index) => {
                        return <CumstCard item={item} wishlist={true} />

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
                    {/* <div className='container CumstCard p-1 gap-5 mt-5 mb-4'>
                        {cardSecound.map((item, index) => {
                            // console.log('!item', !item);
                            if (!item) return null
                            return (
                                <CumstCard item={item} wishlist={false} />
                            );
                        })}
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist
