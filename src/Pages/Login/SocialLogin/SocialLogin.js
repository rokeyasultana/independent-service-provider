import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social images/google.png';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
let errorElement;

    if (error) {

      errorElement =  <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
      
    }

if(user){
    navigate('/home');
}

    return (
        <div>
            <div className='d-flex align-items-center'>
               <div style={{height:'1px'}} className='bg-danger w-50'></div>
               <p className='mt-2 px-2'>or</p> 
               <div style={{height:'1px'}} className='bg-danger w-50'></div>
            </div>
            {errorElement}
            <div className='social'>

                <button
                onClick={()=>signInWithGoogle()}
                className='google'>
                    <img style={{width:"30px"}} src={google}alt="" />
                    <span className='px-2'> Google Sign In</span>
                   </button>
            </div>
        </div>
    );
};

export default SocialLogin;