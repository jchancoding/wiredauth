import React, { Component } from 'react'
import './mac.css';

// import images from assets/mac
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/mac', false, /\.(png|jpe?g|svg)$/));

export default class Mac extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <button type="button" className="btn btn-outline-danger disabled btn-block">
                <p>There is the Mac Suppliant Issue identified and currently being worked out by AppleCare.</p>
                <p>If you see any issue please check this <a href="http://wired-auth.cisco.com/macOS_support.html">support page</a>.</p>
            </button>
            <div className="text-left">
                <h3>Enable 802.1x on Mac</h3>
            </div>
            <div className="card text-left">
                <div className="card-header">
                    Wired (Thunderbolt Adapter):
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ol>
                            <li>
                                <p>Connect the Thunderbolt adapter with the Ethernet cable already connected.</p>
                                <img src={images['mac1.jpg']} alt="mac1.jpg"/>
                            </li>
                            <li>
                                <p>There may be a delay, but shortly you will be prompted for credentials to connect. Enter your CEC username and password.</p>
                                <img src={images['mac2.jpg']} alt="mac2.jpg"/>
                            </li>
                            <li><p>You should now be connected. You can verify this by opening System Preferences (Click on the Apple Menu in the top left of the display) and navigate to the Network section.</p></li>
                            <li>
                                <p>If you didn't get <strong>Authenticated</strong> (or it's in <strong>Authenticating</strong> mode) press on <strong>Disconnect</strong> and then click on <strong>Connect</strong> again untill you get Authenticate</p>
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['mac4.jpg']} alt="mac4.jpg"/><img className="col-sm" src={images['mac5.jpg']} alt="mac5.jpg"/>
                                </div>
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['mac6.jpg']} alt="mac6"/><div className="col-sm"></div>
                                </div>
                            </li>
                        </ol>


                        
                        
                            

                        
                    </div>
                </div>
            </div>


        </div>
      </div>
    )
  }
}
