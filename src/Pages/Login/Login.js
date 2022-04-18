import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container w-50 mt-5'>
            <h4 className='text-center'>Login</h4>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
            <p>create an account? <Link to={"/register"}>register</Link></p>
            <p>Forget Password? <Link to={"/"}>Reset password</Link></p>
        </div>

    );
};

export default Login;