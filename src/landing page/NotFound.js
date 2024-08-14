import React from 'react';
import TopNav from './Navbar';
import Footer from './Footer';

function NotFound() {
    return ( 
        
        <div className= 'container p-5 mb-5'>
        <div className='col-6'><div className='row text-center'>
        <h1 className='mt-5 '>
            404 Not Found</h1>
        <p >Sorry, the page you ar looking for does not exist.</p>
        </div></div>
        <div className='col-6'></div>
    </div> 
   
    );
}

export default NotFound;