import React, { useState } from 'react'


const AddtoCart = ({ item, onhandalprice }) => {
    const [value, setValue] = useState(1)
    const [quntity, setQuntity] = useState([item?.price])


    const onchangeQue = (e, price) => {
        setValue(e.target.value)
        // console.log('e.target.value', e.target.value);
        const addQue = price * e.target.value
        setQuntity(addQue)

        onhandalprice(e.target.value)
    
    }
    return (
        <tr className='carttable'>

            <td className='carttmages'>
                <div className='quntity'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" fill="#DB4444" />
                        <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" strokewidth="{2}" strokelinecap="round" strokelinejoin="round" />
                    </svg>
                    <img src={item?.image} height="50" width="50" alt='' />
                </div>
                {item?.title}  </td>
            <td>{item?.price}</td>
            <td><input type="number" value={value} min="1" max="10" onChange={(e) => onchangeQue(e, item?.price)} />
            </td>
            <td>{quntity}</td>
        </tr>

    )
}

export default AddtoCart
