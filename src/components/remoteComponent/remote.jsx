import React, { Component } from 'react'
import './remote.css';

// import images from assets/remote
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/remote', false, /\.(png|jpe?g|svg)$/));

export default class Remote extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="text-left">
                <h3>Enable 802.1x for RDP</h3>
            </div>
            <div className="card text-left">
                <div className="card-header">
                    Enable 802.1x on PC Laptops for RDP
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ol>
                            <li><p>Open <strong>Network and Sharing Centre</strong></p></li>
                            <li><p>Select <strong>"Change Adaptor Settings"</strong></p></li>
                            <li><p>Select <strong>“Local Area Connection”</strong></p></li>
                            <li><p>Choose <strong>Authentication Tab</strong></p></li>
                            <li><p>Make sure <strong>Remember my credentials for this connection each time I’m logged on</strong> is checked and click on <strong>Settings</strong></p><img src={images['rdp1.jpg']} alt="rdp1.jpg"/></li>
                            <li><p>Click on <strong>Setting</strong> and in Protected EAP Properties click on <strong>Configure...</strong></p><img src={images['rdp2.jpg']} alt="rdp2.jpg"/></li>
                            <li><p>Uncheck the <strong>Automatically use my windwos logon name and password (and domain if any).</strong> and click on <strong>OK</strong></p><img src={images['rdp3.jpg']} alt="rdp3.jpg"/></li>
                            <li><p>In <strong>Authentication</strong> tab click on <strong>Additional Settings...</strong></p><img src={images['rdp1.jpg']} alt="rdp1.jpg"/></li>
                            <li><p> Uncheck <strong>Enable single sign on</strong> and click on <strong>Save credentials</strong></p><img src={images['rdp4.jpg']} alt="rdp4.jpg"/></li>
                            <li><p>Enter credentials in the this format CISCO\username and click on <strong>OK</strong>. Just a reminder that you will also need to change the saved credentials each time your password changes</p><img src={images['rdp5.jpg']} alt="rdp5.jpg"/></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
