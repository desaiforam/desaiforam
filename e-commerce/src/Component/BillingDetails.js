import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Headers from './header'
import Footer from './Footer'
import Images from '../utils/images'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BillingForm from './BillingForm'



const BillingDetails = () => {

    const { state } = useLocation()

    const { ADDTOCART} = useSelector((state) => state.Auth)
    const [SubTotal, setSubTotal] = useState([])
    console.log('subtotal', SubTotal);
    const [Total, setTotal] = useState(0)

    const truncate = (str, max, len) => {
        return str.length > max ? str.substring(0, len) + "..." : str;
    }
    const getprime = () => {
        const pricetotal = ADDTOCART.map(item => ({ id: item.id, price: item.price }))
        const totalData = state.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0);
        setTotal(totalData)
        setSubTotal(pricetotal)
    }
    useEffect(() => {
        getprime()
    }, [])


    return (
        <div>
            <Navbar />
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

                                
                            </div>
                            
                        </form></div>
                    <div className='totalcart d-flex flex-column w-100'>
                        <div className='finalist  d-flex flex-column'>
                            <div className='totaling'>

                                {ADDTOCART&&
                                    ADDTOCART.map((item, index) => {

                                        const totalize = state.find((o) => {
                                            return o.id === item.id
                                        })

                                        return <><div className='crabbily'>
                                            <div className='img'>
                                                <img src={item?.image} height={50} width={50} alt='' />
                                                {truncate(item.title, 5, 20)}
                                            </div>
                                            <div className='moniker'>
                                                {totalize?.price}

                                            </div>
                                        </div>
                                        </>

                                    })}
                            </div>

                            <div className='totalcart'>
                                <div className='totalism d-flex flex-row justify-content-between'>
                                    <span> Subtotal:</span>
                                    {Number(Total).toFixed(2)}
                                </div>
                                <hr />
                                <div className='totalism d-flex flex-row justify-content-between'>
                                    <span> Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <hr />
                                <div className='totalism d-flex flex-row justify-content-between'>
                                    <span> Subtotal:</span>
                                    {Number(Total).toFixed(2)}
                                </div>
                            </div>

                            <div className='bank d-flex flex-column'>
                                <div className='cashoo justify-content-between g-4'>
                                    <div className='backlash'>
                                        <input type="radio" id="radio" name="radio" value="radio" />
                                        <label htmlFor="html">Bank</label></div>
                                    <div className='logbook'>
                                        <img src={Images.bash} height='50' width="50" alt='' />
                                        <img src={Images.visa} height='50' width="50" alt='' />
                                        <img src={Images.mastercard} height='50' width="50" alt='' />
                                        <img src={Images.backlog} height='50' width="50" alt='' />
                                    </div>
                                </div>
                                <div className='cashoo d-flex gap-4'>
                                    <input type="radio" id="radio" name="radio" value="radio" />
                                    <label htmlFor="html">Cash on delivery</label>
                                </div>
                            </div>
                        </div>

                        <div className='couponapply d-flex flex-column'                                                     >
                            <div className='applycoupon d-flex flex-row justify-content-between'>
                                <div className="codecoupon">
                                    <input className='inputted' type='text' name='Coupon Code' placeholder='Coupon Code' />
                                    <button className='coupon'>Apply Coupon</button>
                                </div>
                            </div>
                            <div className='orderplace d-flex' >
                                <button className='btn-placarder' >Place Order</button>

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
