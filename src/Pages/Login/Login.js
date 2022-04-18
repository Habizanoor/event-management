import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email,password);
    }
    const [sendPasswordResetEmail, sending,error2] = useSendPasswordResetEmail(auth);
    if (error2) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (sending) {
        return <p>Sending...</p>;
      }
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address')
        }
    }
    if(error){
        toast('did not match');
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (user) {
        // redirect
        navigate(from, { replace: true });

    }
    return (
        <div className='container w-50 mt-5'>
            <h4 className='text-center'>Login</h4>
            <form onSubmit={handleSignin}>
                <div className="email-field mb-3">
                    <label htmlFor="email">Email</label><br></br>
                    <input ref={emailRef}  name='email' className='w-100 p-3 fs-6' type="email" placeholder='Enter your email..' required />
                </div>
                <div className="password-field mb-3">
                    <label htmlFor="password">Password</label><br></br>
                    <input name='password' className='w-100 p-3 fs-6' type="password" placeholder='Enter your password..' required />
                </div>

                <button className='btn btn-dark' type="submit">
                    Login
                </button>
            </form>
            
            <p>create an account? <Link to={"/register"}>register</Link></p>
            <p>Forget Password? <button className='btn btn-link' onClick={handleReset} to={"/"}>Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>

    );
};

export default Login;