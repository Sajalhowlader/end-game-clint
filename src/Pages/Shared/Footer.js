import React from 'react';
import { FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footers">
        <h2>TakeTasks</h2>
        <div>
            <p>Find On</p>
            <FaFacebook className='icons'/>
            <FaLinkedin className='icons'/>
            <FaTwitter className='icons'/>
            <FaGooglePlus className='icons'/>
            <FaYoutube className='icons'/>
        </div>
        <p className='mt-3'>All reserve by &copy;TakeTasks corporation</p>
        </footer>
    );
};

export default Footer;