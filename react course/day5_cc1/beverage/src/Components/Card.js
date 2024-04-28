

import React from 'react';
import Img1 from  '../assets/images/Tea.jpg'
import Img2 from  '../assets/images/coffee.jpg'
import Img3 from  '../assets/images/softdrinks.jpg'
import Img4 from  '../assets/images/wine.jpg'
import Img5 from  '../assets/images/whisky.jpg'
import '../assets/css/card.css';

function Card() {
  return (
    <div id="scene">
      <div id="left-zone">
        <ul className="list">
          <li className="item">
            <input type="radio" id="first" name="basic_carousel" value="first" checked />
            <label className="label_one" htmlFor="first"><b>ShowCase</b></label>
            <div className="content content_one">
              <div className="container">
                <div className="card" style={{ opacity: '0.8' }}>
                  <h3 className="title">Tea</h3>
                  <img src={Img1}/>
                </div>
                <div className="card" style={{opacity: '0.8' }}>
                  <h3 className="title">Coffee</h3>
                  <img src={Img2}/>
                </div>
                <div className="card" style={{opacity: '0.8' }}>
                  <h3 className="title">Soft Drinks</h3>
                  <img src={Img3}/>
                </div>
                <div className="card" style={{opacity: '0.8' }}>
                  <h3 className="title">Wine</h3>
                  <img src={Img4}/>
                </div>
                <div className="card" style={{opacity: '0.8' }}>
                  <h3 className="title">Whisky</h3>
                  <img src={Img5}/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
  );
}

export default Card;

