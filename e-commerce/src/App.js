import React from 'react';
import './App.css';
import Home from './Pages/HomePages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singup from './Pages/HomePages/Singup';
import Logedin from './Pages/HomePages/Logedin';
import ProductDetails from './Pages/HomePages/ProductDetails';
import Usrecard from './Component/Usrecard';
import Wishlist from './Component/Wishlist';
import Myprofile from './Component/Myprofile';
import BillingDetails from './Component/BillingDetails';
import Contact from './Pages/HomePages/Contact';
import About from './Pages/HomePages/About';
import NotFound from './Component/NotFound';
// import AddPost from './Component/addpost';
import Post from './Component/post';
import { Provider } from 'react-redux';
import store from './store/Store'


const App = () => {
  return (
    <Provider store={store} >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sing-up' element={<Singup />} />
            <Route path='/log-in' element={<Logedin />} />
            <Route path='/prodect-details' element={<ProductDetails />} />
            <Route path='/uase-cart' element={<Usrecard />} />
            <Route path='/wish-list' element={<Wishlist />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/Cart-Details' element={<BillingDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/api' element={<Post />} />

          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>

    </Provider>
  );


}

export default App;
