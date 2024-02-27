import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AuthAction} from '../store/action/AuthAction';


function SizeSelector() {

    const [selectedSize, setSelectedSize] = useState('M');
    const dispatch = useDispatch();
    const { addToCart} = useSelector((state) => state.Auth);


    const handleSizeClick = (size) => {
        setSelectedSize([...addToCart ,size]);
        const setSize = {size: size, id: addToCart[0]}
        dispatch(AuthAction.upDateSize(setSize));
       
    };

    return (
        <div className="size d-flex" style={{cursor:'pointer'}}>
            <span className={`chart ${selectedSize === 'XS' && 'selected'}`} style={{ background: selectedSize === 'XS' ? 'orangeade' : '', color: selectedSize === 'XS' ? 'white' : '' }} onClick={() => handleSizeClick('XS')}>XS</span>
            <span className={`chart ${selectedSize === 'S' && 'selected'}`} style={{ background: selectedSize === 'S' ? 'orangeade' : '', color: selectedSize === 'S' ? 'white' : '' }} onClick={() => handleSizeClick('S')}>S</span>
            <span className={`chart ${selectedSize === 'M' && 'selected'}`} style={{ background: selectedSize === 'M' ? 'orangeade' : '', color: selectedSize === 'M' ? 'white' : '' }} onClick={() => handleSizeClick('M')}>M</span>
            <span className={`chart ${selectedSize === 'L' && 'selected'}`} style={{ background: selectedSize === 'L' ? 'orangeade' : '', color: selectedSize === 'L' ? 'white' : '' }} onClick={() => handleSizeClick('L')}>L</span>
            <span className={`chart ${selectedSize === 'XL' && 'selected'}`} style={{ background: selectedSize === 'XL' ? 'orangeade' : '', color: selectedSize === 'XL' ? 'white' : '' }} onClick={() => handleSizeClick('XL')}>XL</span>
        </div>
    );
}

export default SizeSelector;

//selected size will print in  consol is list of product   only id and size

