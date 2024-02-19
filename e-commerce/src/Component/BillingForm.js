import React, { useState } from 'react';

function BillingForm() {
    const [formData, setFormData] = useState({
        fname: '',
        companionate: '',
        address: '',
        floor: '',
        city: '',
        Number: '',
        Email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const validationErrors = {};
        if (!formData.fname) {
            validationErrors.fname = 'First name is required';
        }
        if (!formData.companionate) {
            validationErrors.companionate = 'Company name is required';
        }
        if (!formData.address) {
            validationErrors.address = 'Street address is required';
        }
        if (!formData.city) {
            validationErrors.city = 'Town/city is required';
        }
        if (!formData.Number) {
            validationErrors.Number = 'Phone number is required';
        }
        if (!formData.Email) {
            validationErrors.Email = 'Email address is required';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} required />
                {errors.fname && <span className="error">{errors.fname}</span>}
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="companionate">Company Name:</label>
                <input type="text" id="companionate" name="companionate" value={formData.companionate} onChange={handleChange} required />
                {errors.companionate && <span className="error">{errors.companionate}</span>}
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="address">Street Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="floor">Apartment, floor, etc. (Optional):</label>
                <input type="text" id="floor" name="floor" value={formData.floor} onChange={handleChange} />
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="city">Town/city:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="Number">Phone Number:</label>
                <input type="text" id="Number" name="Number" value={formData.Number} onChange={handleChange} required />
                {errors.Number && <span className="error">{errors.Number}</span>}
            </div>
            <div className='d-flex flex-column w-100'>
                <label className='d-flex' htmlFor="Email">Email Address:</label>
                <input type="email" id="Email" name="Email" value={formData.Email} pattern=".+@example\.com" size="30" onChange={handleChange} required />
                {errors.Email && <span className="error">{errors.Email}</span>}
            </div>
            <div className=' d-flex mt-4 gap-4 align-items-center'>
                <button type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{height:'15px'}} />
                <label htmlFor="vehicle1"> Save this information for faster check-out next time</label>
            </div>
            {/* <button type="submit">Submit</button> */}
        </form>
    );
}

export default BillingForm;
