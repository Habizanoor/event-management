import React, { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id='services'>
            <h3 className='text-center mt-5'>Services</h3>
            
            <div className="row ">
                {/* <CardGroup> */}
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                {/* </CardGroup> */}
            </div>
        </div>
    );
};

export default Services;