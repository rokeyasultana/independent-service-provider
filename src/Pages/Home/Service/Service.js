import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div className='service'>
            <img className='w-100' style={{width:"250px"}} src={img} alt="" />
            <h2>Service:{name}</h2>
            <p>Price:{price}</p>
            <p>{description}</p>
            <Link to="/checkout">
            <button className='button'>Book: {name}</button>
            </Link>
            
        </div>
    );
};

export default Service;