import React, { Component } from 'react'
import './fedora.css';

// import images from assets/linux/fedora
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../../assets/linux/fedora', false, /\.(png|jpe?g|svg)$/));

export default class Fedora extends Component {
  render() {
    return (
        
      <div className="container">
        <div className="row align-items-start">
            <div className="text-left">
                <h3>Linux Fedora - 802.1x instructions</h3>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    1
                </div>
                <div className="card-body">
                    <img src={images['fedora1.jpg']} alt="fedora1.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    2
                </div>
                <div className="card-body">
                    <img src={images['fedora2.jpg']} alt="fedora2.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    3
                </div>
                <div className="card-body">
                    <img src={images['fedora3.jpg']} alt="fedora3.jpg"/>
                </div>
            </div>
            <div className="card text-center w-100">
                <div className="card-header">
                    4
                </div>
                <div className="card-body">
                    <img src={images['fedora4.jpg']} alt="fedora4.jpg"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
