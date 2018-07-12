import React, { Component } from 'react'
import './pc.css';

// import images from assets/pc
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/pc', false, /\.(png|jpe?g|svg)$/));

export default class PC extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm">
                <h3 id="pc_id">Enable 802.1x on PC laptop</h3>
                <h5>Use a script or manually enable 802.1x on your laptop with the below instructions:</h5>
            </div>
            <div className="card text-left w-100">
                <div className="card-header">
                    Script Authentication
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ol>
                            <li><p>Download the <a href="http://wired-auth.cisco.com/WIN/Wired-UserAuth.exe">script</a> and run it</p></li>
                            <li>
                                <p>Click on <strong>Run</strong> or run <strong>Wired-UserAuth.exe</strong> from your Downloads if you are not using Internet Explorer.</p>
                                <img src={images['win-script1.jpg']} alt="win-script1.jpg"/>
                            </li>
                            <li>
                                <p>Click on <strong>Yes</strong> and then you will get the Script Completed message.</p>    
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['win-script2.jpg']} alt="win-script2.jpg"/><img className="col-sm" src={images['win-script3.jpg']} alt="win-script3.jpg"/>
                                </div>
                            </li>
                            <li><p>Reboot your system if you did not authenticate properly.</p></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="card text-left w-100">
                <div className="card-header">
                    Manual Instructions
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <ol>
                            <li><p>Open <strong>Start</strong> menu, search for <strong>Network and Sharing Centre</strong> and open it</p></li>
                            <li><p>Select <strong>Change Adaptor Settings</strong> in left menu</p></li>
                            <li><p>Double-click on <strong>Local Area Connection</strong> *</p></li>
                            <li><p>Choose <strong>Authentication Tab</strong></p></li>
                            <li><p>Select <strong>Enable IEEE 802.1X authentication</strong></p></li>
                            <li><p>Select either <strong>Fallback to unauthorized network access</strong></p></li>
                            <li><p>Click on <strong>Additional Settings</strong> - set as shown</p></li>
                            <li><p>Select <strong>Specify authentication mode</strong></p></li>
                            <li><p>Select <strong>User authentication</strong> from pull down menu</p></li>
                            <li>
                                <p>Click on <strong>OK</strong></p>
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['pc1.jpg']} alt="pc1.jpg"/><img className="col-sm" src={images['pc2.jpg']} alt="pc2.jpg"/>
                                </div>
                            </li>
                            <li><p>Go back to <strong>Authentication Tab</strong> click on <strong>Settings</strong></p></li>
                            <li><p>Select <strong>Validate server certificate</strong> and check <strong>QuoVadis Root CA 2</strong> in Trusted Root Certificate Authorities</p></li>
                            <li><p>Click on <strong>Configure...</strong> and make sure <strong>Automatically use my Windows logon name and password (and domain if any).</strong> is checked</p></li>
                            <li>
                                <p>Click on <strong>OK</strong></p>
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['pc5.jpg']} alt="pc5.jpg"/><img className="col-sm" src={images['pc3.jpg']} alt="pc3.jpg"/>
                                </div>
                                <div className="row align-items-start">
                                    <img className="col-sm" src={images['pc4.jpg']} alt="pc4.jpg"/>
                                    <div className="col-sm"></div>
                                </div>
                            </li>
                        </ol>
                        <p>If you confirm the 802.1x settings is correct, but still can't connect to network, try to unplug/plug the network cable or disable/re-enable network adapter.</p>
                        <p>* In some cases wired network adapter may be in different name, such as, <strong>Ethernet</strong> or <strong>Local Area Connection 3</strong></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
