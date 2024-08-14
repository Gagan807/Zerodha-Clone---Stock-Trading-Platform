import React from 'react';

function Awards() {
    return (
        <div className='container '>
            <div className='row '>
                <div className='col-6 p-5'>
                     <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                     <h1>Largest stock broker in India</h1>
                     <p className='mb-5'>
                        2+ million Zerodha clients contributes to over 15% of all retail order <br/> volumes in India daily by trading and investing in.
                      </p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                        <li>Futures and Options</li>
                        <li>Commodity derivetuves</li>
                        <li>Currency derivates</li>
                    </ul>
                    </div>
                    <div className = 'col-6'>
                    <ul>
                        <li>Stocks &IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Goverment Security</li>
                    </ul>

                    </div>
                    </div> 
                    <img className='mt-3' src='media/pressLogos.png' style={{width:"90%"}} /> 
                </div>
            </div>
        </div>
    );
}

export default Awards;





