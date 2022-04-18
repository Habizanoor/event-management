import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 text-center '>
            <p><small>copyright  &copy; {(new Date().getFullYear())} </small></p>
        </div>
    );
};

export default Footer;