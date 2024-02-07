import React, { useState } from 'react'




const AddtoCart = ({ item, onhandalprice }) => {
    const [value, setValue] = useState(1)
    const [quntity, setQuntity] = useState([item?.price])

    const onchangeQue = (e, price) => {
        setValue(e.target.value)

        const addQue = price * e.target.value
        setQuntity(addQue)

        onhandalprice(e.target.value)

    }

    return (
        <tr className='carttable'>

            <td className='carttmages'>
                <div className='quntity'>
                    {/* <Remove /> */}
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
