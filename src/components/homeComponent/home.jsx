import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './home.css'

// import images from assets/home
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../assets/home', false, /\.(png|jpe?g|svg)$/));

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <h5>Welcome</h5>
            <p>IT Network Services are implementing 802.1x Authentication on the Wired Network in Cisco offices to bring it in line with the Wireless and CVO networks and adhere to Cisco's Network Access Policy. So that individuals with physical access to Cisco network ports cannot access Cisco data and potentially compromise Cisco's network from inside the network perimeter.</p>
            <h5>What is 802.1x ?</h5>
            <p>IEEE 802.1X is an IEEE Standard for Port-based Network Access Control (PNAC). It is part of the IEEE 802.1 group of networking protocols. It provides an authentication mechanism to devices wishing to attach to a LAN or WLAN.</p>
            <h5>What do I need to do ?</h5>
            <p>Cisco IT Managed devices should have 802.1x enabled on them already. If not - please see support instructions below.</p>

            <div className="row">
                <div className="table-responsive">
                <table className="table table-bordered">
                    <tr>
                        <td className="td_img">
                            <Link to="/pc"><img src={images['win.png']} alt="Windows Logo"/></Link>
                        </td>
                        <td className="td_img">
                            <Link to="/mac"><img src={images['mac.png']} alt="Mac Logo"/></Link>
                        </td>
                        <td className="td_img">
                            <Link to="/remote"><img src={images['remote.png']} alt="Remote Logo"/></Link>
                        </td>
                        <td className="td_img">
                            <Link to="/linux"><img src={images['linux.png']} alt="Linux Logo"/></Link>
                        </td>
                        <td className="td_img" id="modal-1">
                                <img src={images['voice-video.jpg']} alt="Phone Icon" data-toggle="modal" data-target="#modal-1-Center"/>

                                <div className="modal fade" id="modal-1-Center" tabindex="-1" role="dialog" aria-labelledby="modal-1-CenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal-1-LongTitle">Solution</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">Have been enabled for 802.1x already via the Call Managers.<br/><br/>Note: You <span style={{ color:'red' }}>cannot</span> daisy-chain a 2nd voice/video endpoint from the PC Port on the back of your existing voice/video device.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </td>
                        <td className="td_img">
                                <img src={images['printer.jpg']} alt="Printer Icon" data-toggle="modal" data-target="#modal-2-Center"/>

                                <div className="modal fade" id="modal-2-Center" tabindex="-1" role="dialog" aria-labelledby="modal-2-CenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal-2-LongTitle">Solution</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body"><span style={{ color:'red' }}>Not supported by IT</span> - Employees to enable 802.1x using manufacturer's instructions and logon using their AD account.<br/><br/>Note: An IT managed printer is any printer installed by CEPS, typically Xerox.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </td>
                    </tr>
                    <tr className="table-primary">
                        <td>
                            <p>Windows Laptops</p>
                        </td>
                        <td>
                            <p>Mac Laptops</p>
                        </td>
                        <td>
                            <p>Remote Desktops <span style={{ color:'red' }}>Windows Only</span> </p>                        
                        </td>
                        <td>
                            <p>Linux / Unix Workstations</p>
                        </td>
                        <td>
                            <p>Voice / Video Endpoints</p>
                        </td>
                        <td>
                            <p>Non IT Managed Printers</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td_img">
                            <img src={images['devices.jpg']} alt="Devices Icon" data-toggle="modal" data-target="#modal-3-Center"/>
                            <div className="modal fade" id="modal-3-Center" tabindex="-1" role="dialog" aria-labelledby="modal-3-CenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modal-3-LongTitle">Solution</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body"><span style={{ color:'red' }}>Not supported by IT</span> - Employees should contact the manufacturer for instructions on enabling 802.1x, and then logon using their AD account.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="td_img">
                            <img src={images['router-sw.jpg']} alt="Router/Switches Icon" data-toggle="modal" data-target="#modal-4-Center"/>
                            <div className="modal fade" id="modal-4-Center" tabindex="-1" role="dialog" aria-labelledby="modal-4-CenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modal-4-LongTitle">Solution</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">All equipment needs to follow the requirement of the Network Access Policy, which requires user authentication to the network (using the 802.1x protocol). This is mandated by Cisco's internal auditing group. Exceptions are only granted to IT (supported by the Networking or Compute teams) and WPR managed security & building automation devices.<br/><br/>Test and non-802.1x capable equipment will need to be moved off the corporate desktop network as they don't comply with the policy. Options include moving these devices to a lab and migrating VM's (on ESXi) into a data center. Some devices can be patched to the lab if appropriate with lab admin approval and a request to Local IT via HelpZone.cisco.com"<br/><br/><span style={{ color:'red' }}>ESXi is a customized Linux OS.VMware ESXi DOES NOT SUPPORT 802.1x, and thus doesn't comply with the Network Access Policy.</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="td_img">
                            <Link to="/ethernet"><img src={images['ethernet.jpg']} alt="Ethernet Ports Icon"/></Link>
                        </td>
                        <td className="td_img">
                            <img src={images['demo.jpg']} alt="Training Devices Icon" data-toggle="modal" data-target="#modal-5-Center"/>
                            <div className="modal fade" id="modal-5-Center" tabindex="-1" role="dialog" aria-labelledby="modal-5-CenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modal-5-LongTitle">Solution</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                Environments such as training or demo labs intended for use by non-badged persons, must not have access to the production network. Refer to <a href="http://wwwin-eng.cisco.com/IT/Infrastructure/Arch/SEC/Policy/Lab_Security_Policy.doc">On-Site Customer Training and Virtual DMZ Lab Design.</a> 
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="td_img">
                            <a href="https://pwreset.cisco.com/"><img src={images['password.jpg']} alt="Password Icon"/></a>
                        </td>
                        <td className="td_img">
                            <img src={images['users.jpg']} alt="Users Icon" data-toggle="modal" data-target="#modal-6-Center"/>
                            <div className="modal fade" id="modal-6-Center" tabindex="-1" role="dialog" aria-labelledby="modal-6-CenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title" id="modal-6-LongTitle">Solution</h6>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                For inquiries about the use of generic accounts, please use the <a href="https://infosec-jira.cisco.com/jira/servicedesk/customer/portal/15/create/70">servicedesk link</a> and select capability type: <strong>"Other/don't know/not sure"</strong>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-primary">
                        <td>
                            <p>Personal Devices</p>
                        </td>
                        <td>
                            <p>Routers, Switches, ESXi, and APs</p>
                        </td>
                        <td>
                            <p>Onsite (In-office) Patching</p>                        
                        </td>
                        <td>
                            <p>Demo / Training devices</p>
                        </td>
                        <td>
                            <p>Password Management</p>
                        </td>
                        <td>
                            <p>Generic Users</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td_img">
                            <img src={images['exception.jpg']} alt="Devices Icon" data-toggle="modal" data-target="#modal-7-Center"/>
                            <div className="modal fade" id="modal-7-Center" tabindex="-1" role="dialog" aria-labelledby="modal-7-CenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h7 className="modal-title" id="modal-7-LongTitle">Solution</h7>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                If you have a device which is unable to authenticate, you may request an exception through this <a href="http://estore.cisco.com/RequestCenter/servicecatalog/servicecatalog.do?route=offer&id=1089">eStore link</a>. User devices will be granted internet only access for a maximum duration of 90 days. Infrastructure device requests will be reviewed by Infosec. Maximum duration is 180 days.<br/><br/><span style={{ color:'red' }}>Do not request exceptions for devices which are not permitted on the desktop network: routers, switches, ESXI servers, access points</span>.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-primary">
                        <td>
                            <p>802.1x Exception Requests</p>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
