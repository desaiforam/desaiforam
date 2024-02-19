import React from 'react';
import './App.css';
import Home from './Pages/HomePages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/HomePages/Signup';
import Login from './Pages/HomePages/Login';
import ProductDetails from './Pages/HomePages/ProductDetails';
import Useradd from './Component/Useradd';
import Wishlist from './Component/Wishlist';
import Profile from './Component/profile';
import BillingDetails from './Component/BillingDetails';
import Contact from './Pages/HomePages/Contact';
import About from './Pages/HomePages/About';
import NotFound from './Component/NotFound';
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
            <Route path='/sing-up' element={<Signup />} />
            <Route path='/log-in' element={<Login />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/ukase-cart' element={<Useradd />} />
            <Route path='/wish-list' element={<Wishlist />} />
            <Route path='/my-profile' element={<Profile />} />
            <Route path='/Cart-Details' element={<BillingDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/my-profile' element={<Profile />} />
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
