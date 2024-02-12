import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import Headers from './header'
import Footer from './Footer'
import Images from '../utilis/images'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BillingForm from './Formfill'



const BillingDetails = () => {



    const { state } = useLocation()


    const { addtocart } = useSelector((state) => state.Auth)
    const [subtotal, setsubtotal] = useState([])
    const [total, settotal] = useState(0)
    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }
    const getprice = () => {
        const pricetotal = addtocart.map(item => ({ id: item.id, price: item.price }))
        const totalData = state.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0);
        settotal(totalData)
        setsubtotal(pricetotal)
    }
    useEffect(() => {
        getprice()
    }, [])

    // const onhandalprice = (index, qty) => {
    //     console.log('onhandalprice', onhandalprice);

    //     const data = [...subtotal]
    //     console.log('subtotal', subtotal);
    //     // data[index].price = data[index].price * qty


    //     setsubtotal(data)
    //     const totalData = data.reduce((accumulator, object) => {

    //         return accumulator + object.price;
    //     }, 0);

    //     settotal(totalData)
    // }

    return (
        <div>
            <Navebar />
            <Headers />
            <hr className='w-100' />
            <div className='container d-flex flex-column'>
                <div className='checkout d-flex'>
                    <span>Account    </span>
                    <span> /</span>
                    <span>My Account</span>
                    <span> /</span>
                    <span>Product</span>
                    <span> /</span>
                    <span>View Cart</span>
                    <span>/</span>
                    <span style={{ color: 'black', fontWeight: '400' }}>CheckOut</span>
                </div>

                <div className='heading d-flex'>
                    Billing Details
                </div>
                <div className=' d-flex flex-row align-items-start' style={{ gap: '245px' }}>
                    <div className=' d-flex flex-column w-100'>
                       
                        <form>

                        
                        <div className='billingdetails d-flex'>

                            <BillingForm />
                            
                            {/* <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="fname">First Name:</label>
                                <input type="text" id="fname" name="fname" required />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="companyname">Company Name:</label>
                                <input type="text" id="companyname" name="companyname" required />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="address">Street  Address : <span class="field-star" aria-hidden="true">*</span></label>
                                <input type="text" id="address" name="address" required />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="floor">Apartment, floor, etc. (Optional):</label>
                                <input type="text" id="floor" name="floor" />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="city">Town/city:</label>
                                <input type="text" id="city" name="city" required />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="Number">Phone Number:</label>
                                <input type="number" id="Number" name="Number" required />
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label className=' d-flex' htmlFor="Email">Email Address:</label>
                                <input type="email" id="Email" name="Email" required />
                            </div> */}
                        </div>
                        {/* <div className=' d-flex mt-4 gap-4'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                            <label htmlFor="vehicle1"> Save this information for faster check-out next time</label>
                        </div> */}
                        </form></div>
                    <div className='totalcart d-flex flex-column w-100'>
                        <div className='finalcart  d-flex flex-column'>
                            <div className='totalbill'>

                                {addtocart &&
                                    addtocart.map((item, index) => {

                                        const totalprice = state.find((o) => {
                                            return o.id === item.id
                                        })
                                      
                                        return <><div className='cartbill'>
                                            <div className='imges'>
                                                <img src={item?.image} height={50} width={50} alt='' />
                                                {truncate(item.title, 5, 20)}
                                            </div>
                                            <div className='moniter'>
                                                {totalprice?.price}

                                            </div>
                                        </div>
                                        </>

                                    })}
                            </div>

                            <div className='totalcart'>
                                <div className='totalitem d-flex flex-row justify-content-between'>
                                    <span> Subtotal:</span>
                                    {Number(total).toFixed(2)}
                                </div>
                                <hr />
                                <div className='totalitem d-flex flex-row justify-content-between'>
                                    <span> Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <hr />
                                <div className='totalitem d-flex flex-row justify-content-between'>
                                    <span> Subtotal:</span>
                                    {Number(total).toFixed(2)}
                                </div>
                            </div>

                            <div className='bank d-flex flex-column'>
                                <div className='cashon justify-content-between g-4'>
                                    <div className='bankcash'>
                                        <input type="radio" id="radio" name="radio" value="radio" />
                                        <label htmlFor="html">Bank</label></div>
                                    <div className='logobank'>
                                        <img src={Images.bkash} height='50' width="50" alt='' />
                                        <img src={Images.visa} height='50' width="50" alt='' />
                                        <img src={Images.mastrcards} height='50' width="50" alt='' />
                                        <img src={Images.banklogo} height='50' width="50" alt='' />
                                    </div>
                                </div>
                                <div className='cashon'>
                                    <input type="radio" id="radio" name="radio" value="radio" />
                                    <label htmlFor="html">Cash on delivery</label>
                                </div>
                            </div>
                        </div>

                        <div className='couponapply d-flex flex-column'                                                     >
                            <div className='applycoupon d-flex flex-row justify-content-between'>
                                <div className="codecoupon">
                                    <input className='inputtype' type='text' name='Coupon Code' placeholder='Coupon Code' />
                                    <button className='coupon'>Apply Coupon</button>
                                </div>
                            </div>
                            <div className='orderplace d-flex' >
                                <button className='btn-placeorder' >Place Order</button>
                                
                            </div>
                        </div>
                    </div>
                  

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BillingDetails
