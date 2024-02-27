import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AuthAction} from '../store/action/AuthAction';
import { addToCart } from './selectors';

function SizeSelector() {

    const [selectedSize, setSelectedSize] = useState('M');
    const dispatch = useDispatch();
    const { addToCart, WishList, listAdded } = useSelector((state) => state.Auth);


    const handleSizeClick = (size) => {
        dispatch(AuthAction.upDateSize(size));
        setSelectedSize([...addToCart ,size]);

    };

    return (
        <div className="size d-flex" style={{cursor:'pointer'}}>
            <span className={`chart ${selectedSize === 'XS' && 'selected'}`} style={{ background: selectedSize === 'XS' ? 'orangered' : '', color: selectedSize === 'XS' ? 'white' : '' }} onClick={() => handleSizeClick('XS')}>XS</span>
            <span className={`chart ${selectedSize === 'S' && 'selected'}`} style={{ background: selectedSize === 'S' ? 'orangered' : '', color: selectedSize === 'S' ? 'white' : '' }} onClick={() => handleSizeClick('S')}>S</span>
            <span className={`chart ${selectedSize === 'M' && 'selected'}`} style={{ background: selectedSize === 'M' ? 'orangered' : '', color: selectedSize === 'M' ? 'white' : '' }} onClick={() => handleSizeClick('M')}>M</span>
            <span className={`chart ${selectedSize === 'L' && 'selected'}`} style={{ background: selectedSize === 'L' ? 'orangered' : '', color: selectedSize === 'L' ? 'white' : '' }} onClick={() => handleSizeClick('L')}>L</span>
            <span className={`chart ${selectedSize === 'XL' && 'selected'}`} style={{ background: selectedSize === 'XL' ? 'orangered' : '', color: selectedSize === 'XL' ? 'white' : '' }} onClick={() => handleSizeClick('XL')}>XL</span>
        </div>
    );
}

export default SizeSelector;

//set a siez in product then it will store a redux list in auth
