import React from 'react';

const Blogs = () => {
    return (
        <div className='container '>
            <h3>Difference between authorization and authentication</h3>
            <p><strong>Ans:</strong></p>
            <p>Authorization: Authorization comes after authentication. Grants or denies permissions to the user do something. it's not visible by the user. can not be changed by the user. </p>
            <p>Authorization: It's changeable by the user. It's visible by the user. verifies the user's identity.Usually the first step of a security access control.</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><strong>Ans:</strong> </p>

            <h3>What other services does firebase provide other than authentication?</h3>
            <p><strong>Ans:</strong> </p>
        </div>
    );
};

export default Blogs;