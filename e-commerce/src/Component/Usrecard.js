import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import Header from './header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import AddtoCart from './AddtoCart'
import { useNavigate } from 'react-router-dom'
// import AuthAction from '../store/action/AuthAction'

const Usrecard = () => {
    const nevigate = useNavigate()
    const dispatch = useDispatch()
    console.log('dispatch', dispatch);


    const { addtocart } = useSelector((state) => state.Auth)
    const [subtotal, setsubtotal] = useState([])
    const [total, settotal] = useState(0)



    const proceesToCheckout = () => {

        nevigate("/Cart-Details")
    }



    const getprice = () => {
        const pricetotal = addtocart.map(item => ({ id: item.id, price: item.price }))
        const totalData = pricetotal.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0);
        settotal(totalData)
        setsubtotal(pricetotal)
    }

    useEffect(() => {
        getprice()
    },[])


    const onhandalprice = (index, qty) => {
        const data = [...subtotal]
        data[index].price = data[index].price * qty

        setsubtotal(data)
        const totalData = data.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0);
        // console.log('totalData', totalData);
        settotal(totalData)

    }


    return (
        <div>
            <Navebar />
            <Header />
            <div className='container d-flex flex-column '>
                <div className='homecart'>Home/ Cart</div>
                <div className='tablecatr'>
                    <tr className='carttable'>
                        <td className='carttmages'>Product </td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                    {addtocart &&
                        addtocart.map((item, index) => {

                            return <><AddtoCart item={item} onhandalprice={(quantity) => onhandalprice(index, quantity)} />
                            </>

                        })}
                </div>
                <div className='btn btngroup d-flex' >
                    <button>Return To Shop </button>
                    <button>Update Cart</button>
                </div>
                <div className='applycoupon d-flex flex-row justify-content-between'>
                    <div className="codecoupon "><input className='inputtype' type='text' name='Coupon Code' placeholder='Coupon Code' />
                        <button className='coupon'>Apply Coupon</button>
                    </div>
                    <div className='carttotal d-flex flex-column '>
                        <span className='total mb-3'>Cart Total</span>
                        <div className='pricetotal d-flex flex-row justify-content-between'>
                            <span>Subtotal:</span>

                            {Number(total).toFixed(2)}
                        </div>
                        <hr w-75 />
                        <div className='pricetotal d-flex flex-row  justify-content-between'>
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <hr></hr>
                        <div className='pricetotal d-flex flex-row justify-content-between'>
                            <span >Total:</span>
                            {Number(total).toFixed(2)}
                        </div>
                        <div className='process d-flex justify-content-center'>


                            <div onClick={proceesToCheckout} style={{ cursor: "pointer" }} className='position-relative'>
                                <button className='coupon mt-4 '>Procees to checkout</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Usrecard
