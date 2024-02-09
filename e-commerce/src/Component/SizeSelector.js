import React, { useState } from 'react';

function SizeSelector() {

    const [selectedSize, setSelectedSize] = useState(null);
    console.log('selectedSize', selectedSize);


    const handleSizeClick = (size) => {
        setSelectedSize(size);

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
