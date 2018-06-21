import React, { Component } from 'react'
import './ethernet.css';

// import images from assets/linux/ethernet
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/ethernet', false, /\.(png|jpe?g|svg)$/));

export default class Ethernet extends Component {
  render() {
    return (
        
      <div className="container">
        <div className="row align-items-start">
            <div className="col-sm">
                <div className="text-left">
                    <h3>Linux ethernet - 802.1x instructions</h3>
                </div>
                <div className="card w-100">
                    <div className="card-header">
                        1
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <p>
                            Login into <a href="srm.cisco.com">srm.cisco.com</a> 
                            </p>
                        </div>
                        <img src={images['ethernet1.jpg']} alt="ethernet1.jpg"/>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-header">
                        2
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <p>
                            Search key word: <strong>Onsite (In-Office) - Patching</strong> 
                            </p>
                        </div>
                        <img src={images['ethernet2.jpg']} alt="ethernet2.jpg"/>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-header">
                        3
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <p>
                            Click on the request and fill out your information in the popup window.
                            </p>
                        </div>
                        <img src={images['ethernet3.jpg']} alt="ethernet3.jpg"/>
                    </div>
                </div>
                <div className="card w-100">
                    <div className="card-header">
                        4
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <p>
                            Click submit and you will get case number provided
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
