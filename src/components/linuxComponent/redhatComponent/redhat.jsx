import React, { Component } from 'react'
import './redhat.css';

// import images from assets/linux/redhat
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../../assets/linux/redhat', false, /\.(png|jpe?g|svg)$/));

export default class Redhat extends Component {
  render() {
    return (
        
      <div className="container">
        <div className="row align-items-start">
            <div className="text-left">
                <h3>Linux Redhat - 802.1x instructions</h3>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    1
                </div>
                <div className="card-body">
                    <img src={images['redhat1.jpg']} alt="redhat1.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    2
                </div>
                <div className="card-body">
                    <img src={images['redhat2.jpg']} alt="redhat2.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    3
                </div>
                <div className="card-body">
                    <img src={images['redhat3.jpg']} alt="redhat3.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    4
                </div>
                <div className="card-body">
                    <img src={images['redhat4.jpg']} alt="redhat4.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    5
                </div>
                <div className="card-body">
                    <img src={images['redhat5.jpg']} alt="redhat5.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    6
                </div>
                <div className="card-body">
                    <img src={images['redhat6.jpg']} alt="redhat6.jpg"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
