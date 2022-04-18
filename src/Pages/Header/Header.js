import React from 'react';
import { Container, Navbar,  Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = event =>{
        event.preventDefault();
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Rathika Ramasamy's</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        {
                            user ? 
                            <div>
                                <span className='text-white fs-6'>{user.email}</span>
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            </div>
                        : <Nav.Link as={Link} to='login' >
                            Login
                        </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;