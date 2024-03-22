import React from 'react'


const CustomCard2 = (props) => {
  const { items } = props
 
  return (



    <div className='col-2 category-main'>
      <div className='images-box d-flex align-items-center justify-content-center flex-column'>
        {/* <img  src={items.img} className='hover d-flex justify-content-start' height="60" width="60" /> */}
        {items.img}
       
        <span className='value'>
          {items.value}
        </span>
      </div>
    </div>


  )
}

export default CustomCard2
