import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
               <div style={{height:'1px'}} className='bg-danger w-50'></div>
               <p className='mt-2 px-2'>or</p> 
               <div style={{height:'1px'}} className='bg-danger w-50'></div>
            </div>
            <div className='social'>
                <button className='google'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;