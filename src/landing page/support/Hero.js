import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id ="supportHero">
      <div className="row m-5 p-5 " id="supportWrapper">
        <div className="col mx-5">
          <h4>Support portal</h4>
          <div className="mt-5">
               <h3>search for an answer on braower help topics to create a ticket</h3>
               <input placeholder="ex. how do activate F&O ,why is my order getting rejected"></input>
               <div className="mt-3">
                <a href="">Track acoount opening</a>
                <a href="">track segment activation</a>
                <a href="">Intraday margin</a>
                <a href="
                ">Kite user manual</a>
                
               </div>
          </div>
        </div>
        <div className="col " >
          <div id ="rightSection">
          <a href="">track Ticket
          </a> </div>
          <div className="mt-5">
            <h3>Featured</h3>
            <ol>
              <li>
                <a href="">current Takeover and Delisting - january 2024</a>
              </li>
              <li>
                <a href="">Largest intraday-leverage - MS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;