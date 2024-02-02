import React, { useEffect, useState } from 'react'
import Images from '../utilis/images'
import { useDispatch, useSelector } from 'react-redux'
import { AuthAction } from '../store/action/AuthAction'

const ProductCard = (props) => {

const { item,  index } = props
const { addtocart } = useSelector((state) => state.Auth)


const [carttoadd, setCarttoadd] = useState([])
useEffect(() => {
  setCarttoadd(addtocart)
  console.log('loder')
},[addtocart])


const truncate = (str, max, len) => {
  return str.length > max ? str.substring(0, len) + "..." : str;
}
const iscart = carttoadd.length > 0 ? carttoadd.find(itemid => { return itemid.id === item.id }) : false

// console.log('iscart', addtocart);

const dispatch = useDispatch();
const addWishlist = () => {
  dispatch(AuthAction.uapdateWishlist(item))
}


const addtocartbtn = () => {
  dispatch(AuthAction.updatCart(item))

  // const object = carttoadd.push(item);
  console.log('[...carttoadd,item]', [...carttoadd, item]);
  setCarttoadd([...carttoadd, item])
  // console.log('object', object);


}
const carttoremovebtn = (id) => {

  dispatch(AuthAction.removetoCart(id))
  const object = carttoadd.filter(obj => obj.id !== id);
  setCarttoadd(object)
  console.log('carttoremove', object);
}
  return (

    <div className='cumstcard col-3 position-relative' key={index}>
      <div className='images position-absolute mt-5 d-flex flex-column justify-content-center  align-items-center' style={{ right: 0 }}>
      <button style={{ border: 'none' }} onClick={() => addWishlist()}>
            <img src={Images.vector} className='d-flex justify-content-start' height="20" width="20" alt='' />
          </button>
        <img src={Images.FillEye} className='d-flex' height="20" width="20" alt='' />
      </div>
      {item.button && <button className='btn  btn-success d-flex  position-absolute m-3' style={{  border: '0' }}>{item.button} </button>}
      <div className='addtocart d-flex align-itme-center mt-5 mb-3' >

        {/* <div className='addtocart' style={{height: '70%', width: '70%' }} > */}
        <img src={item?.image} style={{ maxHeight: '70%', maxWidth: '70%' }} alt='' />
      </div>
      {/* </div> */}
      <div className='addto'>
      <div className='addto mb-3'>
          {/* {!carttoadd && <button className='btn btn-dark ' onClick={() => addtocartbtn(item)}>Add To cart</button>
          } */}
          {!iscart && <button className='btn btn-dark ' onClick={() => addtocartbtn(item)}>Add To Cart</button>
          }
          {iscart && <button className='btn btn-dark ' onClick={() => carttoremovebtn(item.id)}>Remove To Cart</button>
          }
      </div>
      <div className='games mt-3'>
        <div className='d-flex flex-column  align-items-start'>
          <div className='havit' style={{ color: "black" }}>
            <h6>
              {truncate(item?.title, 5, 30)}
            </h6>
          </div>
          <div className='price d-flex gap-1  align-itme-center '>
            <span className='valueone' style={{ color: "red" }}>{item?.price}</span>
            <div className='d-flex align-items-center gap-2' style={{ color: "orange" }}>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <div className='value3 d-flex flex-row'>
                <span className='gap-2' style={{ color: "gray", fontSize: "medium" }}>({item?.rating?.count})</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div >
    </div>
  )
}

export default ProductCard
