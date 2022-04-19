import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div className='service'>
            <img className='w-100' style={{width:"250px"}} src={img} alt="" />
            <h2>Service:{name}</h2>
            <p>Price:{price}</p>
            <p>{description}</p>
            <button className='button'>Book: {name}</button>
        </div>
    );
};

export default Service;