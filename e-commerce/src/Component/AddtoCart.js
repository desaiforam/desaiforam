import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import{ AuthAction} from '../store/action/AuthAction';



const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
}
const AddtoCart = ({ item, onhandalprice,index }) => {
    // console.log('item', item);
    const [value, setValue] = useState(1)
    const [quantity, setQuantity] = useState([item?.price])
    // console.log('quantity', quantity);

    // const { quntityfind, } = useSelector((state) => state.Auth)
    // console.log('quntityfind', quntityfind);



    const dispatch = useDispatch()


    const onchangeQue = (e, price) => {
        setValue(e.target.value)
         dispatch (AuthAction.UpDatQuantityCart({ index:index,quantity:e.target.value}) )
        const addQue = price * e.target.value
        setQuantity(addQue)
        onhandalprice(e.target.value)
    }

    useEffect(() => {
        setValue(item.profundity)
        const addQue = item?.price * value
        setQuantity(addQue)
    }, [])

    useEffect(() => {
        setQuantity(quantity)
    }, [quantity])




    return (
        <tr className='carttable'>

            <td className='carttmages'>
                <div className='quantity'>

                    <img src={item?.image} height="50" width="50" alt='' />
                </div>
                {truncate(item?.title, 5, 30)}
            </td>
            <td>{item?.price}</td>
            {/* <td>
                {Number(item?.price).toFixed(2)}
            </td> */}
            <td>

                <input type="number" value={item.profundity} min="1" max="10" onChange={(e) => onchangeQue(e, item?.price)} />

            </td>
            <td>
                {quantity}
            </td>
        </tr>

    )
}

export default AddtoCart
