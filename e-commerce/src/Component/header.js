import React from 'react'
import Images from '../utils/images'
import { Bag, Cancleicon, LogOut, Review, Uaericon } from '../asset/images/svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = ({ posts }) => {
  const navigate = useNavigate()
  const addToWishList = () => { navigate("/wish-list ") }
  const onclickHome = () => { navigate("/") }
  const onclickCart = (posts) => { navigate("/ukase-cart") }
  const onclickAbout = () => { navigate("/about") }
  const onclickContacts = () => { navigate("/contact") }
  const onclickSignup = () => { navigate("/sing-up") }
  const onclickMyOrder = () => { navigate("/product-details") }
  const onclickFound = () => { navigate("/not-found") }
  const onclickLogout = () => { navigate("/admin-login")}
  const { WishList, addToCart} = useSelector((state) => state.Auth)


  return (

    <div className="container header-container w-100">

      <img src={Images.logo} alt="" width="118" height="25" />
      <div className=" navbar-nav d-flex flex-row  " >

        <ul className="navbar-nav d-flex flex-row ">
          <li className="nav-item">
            <div onClick={onclickHome} style={{ cursor: "pointer" }} className='position-relative'>
              Home
            </div>
          </li>
          <li className="nav-item">
            <div onClick={onclickContacts} style={{ cursor: "pointer" }} className='position-relative'>Contact</div>
          </li>
          <li className="nav-item">
            <div onClick={onclickAbout} style={{ cursor: "pointer" }} className='position-relative'> About</div>
          </li>
          <li className="nav-item">
            <div onClick={onclickSignup} style={{ cursor: "pointer",whiteSpace: "nowrap" }} className='position-relative'> Sign Up</div>
           
          </li></ul>
        <div className="container-fluid">
          <div className="search">
            <div className="search_bar"  >
              <input className="form" type="search" placeholder="What are you looking for?"  >

              </input>
              <img src={Images.search} alt='' width="20" height="20" style={{ marginRight: "15px" }} />

            </div>
            <div className='img g-2 '>
              <div onClick={addToWishList} className='position-relative' style={{ cursor: "pointer" }} >
                 <img src={Images.vector} width="35" height="35" alt='' /> 
                {WishList.length > 0 && <div className='position-absolute wishlist-count' >{WishList.length}</div>}

              </div>
              <div onClick={ onclickCart} style={{ cursor: "pointer" }} className='position-relative'>
                <img src={Images.cart1} width="35" height="35" alt='' />
                {addToCart.length > 0 && <div className='position-absolute wishlist-count' >{addToCart.length}</div>}
              </div>
             
              <div className="dropdown">
                <a className="btn " href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={Images.user} width="35" height="35" alt='' />
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li className=' d-flex align-items-center'>
                    <Uaericon /><a className="dropdown-item" href="/my-profile">Manage My Account</a></li>
                  <li className=' d-flex align-items-center'>
                    <Bag fill='black' />
                    <div onClick={onclickMyOrder} className='dropdown-item position-relative' style={{ cursor: "pointer" }} >
                      My Order
                    </div>
                  </li>
                  <li className=' d-flex align-items-center'><Cancleicon />
                    <div onClick={onclickFound} className='dropdown-item position-relative' style={{ cursor: "pointer" }} >
                      My Cancellations
                    </div>
                    </li>
                  <li className='d-flex align-items-center'><Review />
                    <a className='dropdown-item' href='/api'>My Reviews</a>
                  </li>
                  <li className=' d-flex align-items-center'><LogOut />
                  <div onClick={onclickLogout} className='dropdown-item position-relative' style={{ cursor: "pointer" }} >
                  Logout
                    </div>
                    </li>
                </ul>
              </div>

            </div>

          </div>


        </div>
      </div>
    </div>

  )
}

export default Header
