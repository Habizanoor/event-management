import React from 'react';
import google from '../../../images/Social/google.png';

import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    // let errorElement;
    // if (error) {
    //     errorElement = <div><p>error:{error?.message}</p></div>
    // }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {

        navigate('/');

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>

            </div>
            {/* {errorElement} */}
            <div className=' mx-auto my-2'>
                <Button onClick={() => signInWithGoogle()} variant="outline-dark" className='w-100'><img style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} src={google} alt="" />Google SignIn</Button>
            </div>


        </div>
    );
};

export default SocialLogin;