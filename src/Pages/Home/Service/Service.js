
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, price, picture, name, description } = service;
    const navigate = useNavigate();
    const handleService = () =>{
        navigate(`/checkout`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <Card>
                <Card.Img style={{ height: "180px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className='text-center' style={{ border: 'none', backgroundColor: 'white' }}>
                    <Button onClick={handleService} variant="dark">Dark</Button>{' '}
                </Card.Footer>
            </Card>
        </div>

    );
};

export default Service;