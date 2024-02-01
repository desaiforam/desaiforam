import React, { useState } from 'react'
import Images from '../utilis/images'
import '../asset/style/cumstcard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AuthAction } from '../store/action/AuthAction'

const CumstCard = (props) => {


  const { item, slider, index } = props
  const { addtocart } = useSelector((state) => state.Auth)
  const [carttoadd, setCarttoadd] = useState("")
  // console.log('addtocart', addtocart);

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  }
  const iscart = addtocart.find(itemprice => { return itemprice.id === item.price })
  console.log('addtocart', addtocart);

  console.log('iscart', iscart);

  const dispatch = useDispatch();
  const addWishlist = () => {
    dispatch(AuthAction.uapdateWishlist(item))
  }

  const addtocartbtn = () => {
    dispatch(AuthAction.updatCart(item))

    const object = addtocart.find(obj => obj === item);
    setCarttoadd(object)
    console.log('object', object);

  }
  return (

    <div className=' d-flex  col-3 ' key={index}>
      <div className={`${slider ? "" : ""}position-relative d-flex flex-column`}>
        <div className='images  position-absolute d-flex flex-column align-items-center' style={{ right: '25px' }}>

          <button style={{ border: 'none' }} onClick={() => addWishlist()}>
            <img src={Images.vector} className='d-flex justify-content-start' height="20" width="20" alt='' />
          </button>
          <img src={Images.FillEye} className='d-flex' height="20" width="20" alt='' />
          {item.icon && <img src={Images.delete} className='d-flex' height="20" width="20" alt='' />}

        </div>
        {item.button && <button className='btn  btn-success d-flex  position-absolute m-3' style={{ background: item.buttoncolor, border: '0' }}>{item.button} </button>}
        <div className='cardcustm d-flex flel-d-block align-itme-center m-5 justify-content-center'>
          <div className='img'>
            <img src={item?.image} style={{ height: '90%', width: '90%' }} alt='' />
          </div>
        </div>
        <div className='addto mb-3'>
          {!carttoadd && <button className='btn btn-dark ' onClick={() => addtocartbtn(item)}>Add To cart</button>
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
            <div className='value3 d-flex flex-row justify-content-center mt-2 gap-2' >
              {item?.rating?.rate && <div className='d-flex  flex-row gap-1' style={{ color: "orange" }}>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>}
              <h5 style={{ font: 'small-caption' }}>({item?.rating?.count})</h5>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default CumstCard


