import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handelRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

      await  createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName:name});
      alert('updated profile');
      navigate('/home');
    }
    
   
    return (
        <div className='register-form mt-5'>
            <h2 className='text-center' style={{ color: 'coral' }}>Please Register</h2>
            <form onSubmit={handelRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your  
                Email'required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;