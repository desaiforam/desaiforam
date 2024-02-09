import React, { useEffect, useState } from 'react'
import Images from '../utilis/images'
import '../asset/style/cumstcard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AuthAction } from '../store/action/AuthAction'
import { Blnkheart, Heart } from '../asset/images/svg'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'



const CumstCard = (props) => {


  const { item, index, } = props
  console.log('item', item);

  const nevigate = useNavigate()
  const { addtocart, wishlist } = useSelector((state) => state.Auth)

  const [carttoadd, setCarttoadd] = useState([])
  const [addtowish, setaddtoWish] = useState([])
  useEffect(() => {
    setCarttoadd(addtocart)
  }, [addtocart])
  useEffect(() => {
    setaddtoWish(wishlist)

  }, [wishlist])
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  }
  const iscart = carttoadd.length > 0 ? carttoadd.find(itemid => { return itemid.id === item.id }) : false
  const iswish = addtowish.length > 0 ? addtowish.find(itemid => { return itemid.id === item.id }) : false
  const dispatch = useDispatch();

  const onclickMyOrder = (item) => {
    nevigate("/prodect-details", { state: { ...item, iscart: !!iscart } })
  }
  const addtocartbtn = (e) => {
    dispatch(AuthAction.updatCart(item))
    setCarttoadd([...carttoadd, item])
    e.stopPropagation();
  }
  const wishlistbtn = (e) => {
    dispatch(AuthAction.uapdateWishlist(item))
    setaddtoWish([...addtowish, item])
    e.stopPropagation();

  }
  const carttoremovebtn = (id,e) => {
    dispatch(AuthAction.removetoCart(id))
    const object = carttoadd.filter(obj => obj.id !== id);
    setCarttoadd(object)
    e.stopPropagation();

  }
  const wishtoremovebtn = (e,id) => {
    dispatch(AuthAction.removetowish(id))
    const object = addtowish.filter(obj => obj.id !== id);
    setaddtoWish(object)
    e.stopPropagation();
  }
  
  return (

    <div className='d-flex  col-3 ' key={index}>
      <div className='position-relative d-flex flex-column cardmain' onClick={() => onclickMyOrder(item)}  >
        <div className='images  position-absolute d-flex flex-column align-items-center justify-content-center' style={{ right: '25px', background: 'transparent' }}>
          {!iswish ?
            <button style={{ border: 'none', background: 'transparent' }} onClick={(e) =>  wishlistbtn(e,item) }>
              <Blnkheart />
            </button> :

            < button style={{ border: 'none', background: 'transparent' }} onClick={(e) =>  wishtoremovebtn(e,item.id) }>
              <Heart />
            </button>
          }

          <img src={Images.FillEye} className='d-flex' height="20" width="20" alt='' />


        </div>
        {item.button && <button className='btn  btn-success d-flex  position-absolute m-3' style={{ background: item.buttoncolor, border: '0' }}>{item.button} </button>}
        <div className='cardcustm d-flex flel-d-block align-itme-center m-5 justify-content-center' >
          <div className='img'>

            <img src={item?.image} style={{ height: '90%', width: '90%' }} alt='' />
          </div>
        </div>
        <div className='addto mb-3'>
          {!iscart && <button className='btn btn-dark ' onClick={(e) => addtocartbtn(e,item)}>Add To Cart</button>
          }
          {iscart && <button className='btn btn-dark ' onClick={(e) => carttoremovebtn(item.id,e)}>Remove To Cart</button>
          }
        </div>
        <div className='games'>
          <div className='d-flex flex-column  align-items-start'>

            <div className='havit'>
              <h6>

                {truncate(item?.title, 5, 30)}
              </h6>
            </div>
            <div className='price'>
              <span>{item.price}</span>
              <span style={{ color: "gray", position: "relative" }}>
                <span className='price2' />
                {item.pricetwo}
              </span>


            </div>
            <div className='value3 d-flex flex-row justify-content-center align-items-baseline mt-2 gap-2' >
              <div className={item?.rating.rate} style={{ color: "orange" }} >

                <div>
                  {/* {item?.rating.rate} */}
                  <FaStar {...item?.rating.rate} />
                  <FaStar  {...item?.rating.rate} />
                  <FaStar  {...item?.rating.rate} />
                  <FaStar  {...item?.rating.rate} />
                  <FaStar {...item?.rating.rate} />
                </div>

              </div>
              <h5 style={{ font: 'small-caption' }}>({item?.rating?.count})</h5>
            </div>
          </div>
        </div>
      </div>



    </div >
  )
}

export default CumstCard


