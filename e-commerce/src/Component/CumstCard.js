import React, { useEffect, useState } from 'react'
import Images from '../utilis/images'
import '../asset/style/cumstcard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AuthAction } from '../store/action/AuthAction'
import { Blnkheart, Heart } from '../asset/images/svg'

const CumstCard = (props) => {

  const { item, slider, index } = props
  const { addtocart } = useSelector((state) => state.Auth)

  const [carttoadd, setCarttoadd] = useState([])
  const [addtowish, setaddtoWish] = useState([])
  useEffect(() => {
    setCarttoadd(addtocart)
  }, [addtocart])
  useEffect(() => {
    setaddtoWish(addtowish)
    // console.log('loder')
  }, [addtowish])

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  }
  const iscart = carttoadd.length > 0 ? carttoadd.find(itemid => { return itemid.id === item.id }) : false
  const iswish = addtowish.length > 0 ? addtowish.find(itemid => { return itemid.id === item.id }) : false
  console.log('iswish', iswish);

  const dispatch = useDispatch();

  const addtocartbtn = () => {
    dispatch(AuthAction.updatCart(item))
    console.log('[...carttoadd,item]', [...carttoadd, item]);
    setCarttoadd([...carttoadd, item])
  }
  const wishlistbtn = () => {
    dispatch(AuthAction.uapdateWishlist(item))
    console.log('[...carttoadd,item]', [...addtowish, item]);
    setaddtoWish([...addtowish, item])

  }
  const carttoremovebtn = (id) => {
    dispatch(AuthAction.removetoCart(id))
    const object = carttoadd.filter(obj => obj.id !== id);
    setCarttoadd(object)
    console.log('carttoremove', object);
  }
  const wishtoremovebtn = (id) => {
    dispatch(AuthAction.removetowish(id))
    const object = addtowish.filter(obj => obj.id !== id);
    setaddtoWish(object)
    // console.log('wishtoremovebtn', object);

  }

  return (

    <div className=' d-flex  col-3 ' key={index}>
      <div className={`${slider ? "" : ""}position-relative d-flex flex-column`}>
        <div className='images  position-absolute d-flex flex-column align-items-center' style={{ right: '25px' }}>
          {!iswish ?
            < button style={{ border: 'none', color: 'red' }} onClick={() => wishlistbtn(item)}>
              <Blnkheart />
            </button> :
            < button style={{ border: 'none', color: 'red' }} onClick={() => wishtoremovebtn(item.id)}>

              <Heart />
            </button>

          }
          {/* <div className='addto mb-3'>
            {iswish &&
              < button style={{ border: 'none', color: 'red' }} onClick={() => wishlistbtn(item)}>
                <Heart />
              </button>}
            {!iswish && <button style={{ border: 'none', color: 'red' }} onClick={() => wishtoremovebtn(item.id)}>
              <img src={Images.vector} className='d-flex justify-content-start' height="20" width="20" alt='' />
            </button>
            }
          </div> */}
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
          {!iscart && <button className='btn btn-dark ' onClick={() => addtocartbtn(item)}>Add To Cart</button>
          }
          {iscart && <button className='btn btn-dark ' onClick={() => carttoremovebtn(item.id)}>Remove To Cart</button>
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
              {/* {item?.rating?.rate && <Rating name="half-rating" defaultValue={2.5} precision={0.5} />} */}

              <h5 style={{ font: 'small-caption' }}>({item?.rating?.count})</h5>
            </div>
          </div>
        </div>
      </div>



    </div >
  )
}

export default CumstCard


