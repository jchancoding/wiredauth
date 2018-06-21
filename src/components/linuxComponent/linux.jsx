import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './linux.css';

// import images from assets/linux
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/linux', false, /\.(png|jpe?g|svg)$/));

export default class Linux extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="text-left">
                <h3>Enable 802.1x on Linux / Unix</h3>
            </div>
            <div className="card text-left">
                <div className="card-header">
                    Click an image for instructions to enable dot1x on CEL, Fedora, Redhat and Ubuntu & similar distributions.
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tr>
                                    <td>
                                        <Link to="/cel"><img src={images['cel.png']} alt="cel.png"/></Link>
                                        <p>Cisco Enterprise Linux (CEL)</p>
                                    </td>
                                    <td>
                                        <Link to="/redhat"><img src={images['redhat.png']} alt="redhat.png"/></Link>
                                        <p>Red Hat*</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/fedora"><img src={images['fedora.png']} alt="fedora.png"/></Link>
                                        <p>Fedora*</p>
                                    </td>
                                    <td>
                                        <Link to="/ubuntu"><img src={images['ubuntu.png']} alt="ubuntu.png"/></Link>
                                        <p>Ubuntu*</p>
                                    </td>
                                </tr>
                            </table>
                            <p>* Please note, this OS is not officially supported by IT. Please see <a href="https://cisco.jiveon.com/docs/DOC-274523">https://cisco.jiveon.com/docs/DOC-274523</a> for supported offerings. This OS is a community support model, and this information and assistance is provided on a best effort basis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
