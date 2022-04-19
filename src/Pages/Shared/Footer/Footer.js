import React from 'react';

const Footer = () => {
    const today=new Date();
    const year= today.getFullYear()
    return (
        <footer className='text-center mt-5'>
            <h3>Contact Info</h3>
            <p>Phone Number: +012478860</p>
            <p>Email: thefixpert@gmail.com</p>
            <p><small>copyright {year}</small></p>

        </footer>
    );
};

export default Footer;