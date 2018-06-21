import React, { Component } from 'react'
import './ubuntu.css';

import Prism from 'prismjs';

// import images from assets/linux/ubuntu
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../../assets/linux/ubuntu', false, /\.(png|jpe?g|svg)$/));

export default class Ubuntu extends Component {
  render() {
    return (
        
      <div className="container">
        <div className="row align-items-start">
            <div className="text-left">
                <h3>Linux ubuntu - 802.1x instructions</h3>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    1
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                        (Earlier or other Ubuntu version will likely work, but have not be tested)
                        </p>
                        <p>
                        Following the successful install of Ubuntu 16.04, the screen shots and directions below, will instruct how to enable 802.1x on a hard wired port, named:
                        </p>
                        <ul>
                            <li>Wired Connection 1</li>
                            <li>Click the Gear/Wrench - System Setting icon in the left dock</li>
                            <li>Click on the Network icon, under Hardware</li>
                        </ul>
                    </div>
                    <img src={images['ubuntu1.jpg']} alt="ubuntu1.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    2
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                        In the Wireless tab, turn OFF Wireless (this will not disable permanently disable Wi-Fi
                        </p>
                    </div>
                    <img src={images['ubuntu2.jpg']} alt="ubuntu2.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    3
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                        Next, click the Wired tab, ensure it is turned ON
                        </p>
                        <p>Next, click the Options- button in the lower right</p>
                    </div>
                    <img src={images['ubuntu3.jpg']} alt="ubuntu3.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    4
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ol>
                            <li>Choose the 802.1x Security tab</li>
                            <li>For Authentication, choose: Protected EAP (PEAP)</li>
                            <li>Leave Anonymous identity blank</li>
                            <li>For CA certificate, check box: No CA certificate is required</li>
                            <li>PEAP version: Automatic, Inner Authentication: MSCHAPv2</li>
                            <li>Username: Enter your CEC username:- (Generic IDs will not work)</li>
                            <li>Password: Enter your matching CEC password (Check show password, to ensure you type it correctly), then Click Save</li>
                        </ol>
                    </div>
                    <img src={images['ubuntu4.jpg']} alt="ubuntu4.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    5
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>REBOOT your system, then login</p>
                        <p>Once the wired connection comes ready (takes about 10 seconds), you will get a popup keychain entry box:</p>
                        <p>Re-enter your CEC password, then click Connect- button. - Hint: Use Show password, to ensure you get it right.</p>
                        <p>Reboot your host once again.</p>
                    </div>
                    <img src={images['ubuntu5.jpg']} alt="ubuntu5.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    6
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>Once you are logged in, bring up a terminal window</p>
                        <p>Issue this command, to verify proper 802.1x authentication:</p>
                        <pre><code>sudo wpa_cli status</code></pre>
                        <p>You should see the word, Authenticated</p>
                    </div>
                    <img src={images['ubuntu6.jpg']} alt="ubuntu6.jpg"/>
                </div>
            </div>
            <div className="card w-100">
                <div className="card-header">
                    7
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>Another method to verify 802.1x auth, is to open Firefox browser and go to <a href="http://wired-auth.cisco.com">http://wired-auth.cisco.com</a></p>
                        <p>The Authentication status of your port, will be in the upper right corner of your browser</p>
                    </div>
                    <img src={images['ubuntu7.jpg']} alt="ubuntu7.jpg"/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
