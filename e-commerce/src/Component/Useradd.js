import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import Header from './header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import AddtwoCart from './AddtwoCart'
import { useLocation, useNavigate } from 'react-router-dom'
// import AuthAction from '../store/action/AuthAction'

const Useradd = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const { state } = useLocation()
  


    const { advocaat} = useSelector((state) => state.Auth)
    console.log('advocaat', advocaat);
    const [SubTotal, setSubTotal] = useState([])
    const [total, settotal] = useState(0)
    const proceedToCheckout = () => {

        navigate("/Cart-Details ", { state: SubTotal })
    }
    const gasprice = () => {
        const pricetotal = advocaat.map(item => ({ id: item.id, price: item.price }))
        const totalData = pricetotal.reduce((accumulator, object) => {

            return accumulator + object.price;

        }, 0);
        settotal(totalData)
        setSubTotal(pricetotal)
    }

    useEffect(() => {
        gasprice()
    },[state])

    const onhandalprice = (index, qty, itemprice) => {
        const data = [...SubTotal]
        data[index].price = itemprice * qty
        setSubTotal(data)

        const totalData = data.reduce((accumulator, object) => {
            return accumulator + object.price;
        }, 0);

        settotal(totalData)
    }

    return (
        <div>
            <Navebar />
            <Header />
            <div className='container d-flex flex-column '>
                <div className='homecart'>Home/ Cart</div>
                <div className='tablecatr'>
                    <tr className='cartable'>
                        <td className='cartages'>Product </td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                    {advocaat&&
                        advocaat.map((item, index) => {
                            // const totalprice = state.find((o) => {
                            //     return o.id === item.id})
                            return <><AddtwoCart item={item} index={index} onhandalprice={(quantity) => onhandalprice(index, quantity, item.price)} />
                            </>
                        })}
                </div>
                <div className='btn btngroup d-flex' >
                    <button>Return To Shop </button>
                    <button>Update Cart</button>
                </div>
                <div className='applycoupon d-flex flex-row justify-content-between'>
                    <div className="codecoupon "><input className='inputted' type='text' name='Coupon Code' placeholder='Coupon Code' />
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
                            <div onClick={proceedToCheckout} style={{ cursor: "pointer" }} className='position-relative'>
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

export default Useradd
