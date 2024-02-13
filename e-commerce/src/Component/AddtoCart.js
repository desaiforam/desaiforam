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
    const [quntity, setQuntity] = useState([item?.price])
    // console.log('quntity', quntity);

    const { quntityfind, } = useSelector((state) => state.Auth)
    // console.log('quntityfind', quntityfind);



    const dispatch = useDispatch()


    const onchangeQue = (e, price) => {
        setValue(e.target.value)
         dispatch (AuthAction.updatQuantitycart({ index:index,quntity:e.target.value}) )
        const addQue = price * e.target.value
        setQuntity(addQue)
        onhandalprice(e.target.value)
    }

    useEffect(() => {
        setValue(item.proquantity)
        const addQue = item?.price * value
        setQuntity(addQue)
    }, [])

    useEffect(() => {
        setQuntity(quntity)
    }, [quntity])




    return (
        <tr className='carttable'>

            <td className='carttmages'>
                <div className='quntity'>

                    <img src={item?.image} height="50" width="50" alt='' />
                </div>
                {truncate(item?.title, 5, 30)}
            </td>
            <td>{item?.price}</td>
            {/* <td>
                {Number(item?.price).toFixed(2)}
            </td> */}
            <td>

                <input type="number" value={item.proquantity} min="1" max="10" onChange={(e) => onchangeQue(e, item?.price)} />

            </td>
            <td>
                {quntity}
            </td>
        </tr>

    )
}

export default AddtoCart
