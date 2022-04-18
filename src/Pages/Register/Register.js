
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import auth from '../../firebase.init';


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(`/home`);
  }
    const handleRegister = event =>{
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);
        createUserWithEmailAndPassword(email, password);
        
    }
    return (
        <div className='container w-50 mt-5'>
            <h4 className='text-center'>Register</h4>

            <form onSubmit={handleRegister}>
                <div className="name-field mb-3">
                    <label htmlFor="name">Name</label><br></br>
                    <input  name='name' className='w-100 p-3 fs-6' type="text" placeholder='Enter your name..' required />
                </div>
                <div className="email-field mb-3">
                    <label htmlFor="email">Email</label><br></br>
                    <input  name='email' className='w-100 p-3 fs-6' type="email" placeholder='Enter your email..' required />
                </div>
                <div className="password-field mb-3">
                    <label htmlFor="password">Password</label><br></br>
                    <input  name='password' className='w-100 p-3 fs-6' type="password" placeholder='Enter your password..' required />
                </div>
                <div className=" mb-3 confirm-password-field">
                    <label htmlFor="confirm-password">Confirm Password</label><br></br>
                    <input name='confirmPassword' className='w-100 p-3 fs-6' type="password" placeholder='Enter same password..' required />
                </div>
                <p>{error?.message}</p>
                <Button variant="dark" type="submit">Register</Button>{' '}
            </form>
            <p>Already have an account? <button  className='btn btn-link' to={"/login"}>login</button></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;