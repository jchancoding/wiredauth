import React, { Component } from 'react'
import './cel.css';

import Prism from 'prismjs';

// import images from assets/linux/cel
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../../assets/linux/cel', false, /\.(png|jpe?g|svg)$/));

export default class Cel extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="text-left">
                <h3>Linux CEL - Enabling 802.1x instructions</h3>
                <p>Enabling 802.1x in CEL DevSuite 6.80/6.50/6.60 and CEL Workstation 5.50/5.90/6.30/6.60</p>
                <p><strong>NOTE</strong>: Very early versions of CEL 5.5 (2012-thru-2014) do not support hashed passwords. The only option for these early versions is to reimage to the current version of CEL 5.5 Workstation or preferred, CEL DevSuite 6.60</p>
                <p><strong>Very Important:</strong> CEL hosts can become disconnected from the YUM repos. This will prevent you from installing the 802.1x package (wpa_supplicant). The support policy for old installs, is for you to ensure no private/work data is stored on your system, and then reimage to a current CEL image. CEL 5.x is at end-of-life support effective March 2017.</p>
                <p>Doc revision: 20160902 <a href="mailto:gedmisto@cisco.com">gedmisto@cisco.com</a></p>
                <p><strong>Assumption is that CEL host is already installed, running, and registered to Satellite repos.  We are providing two methods to enable 802.1x on your CEL host.  This information is ONLY for Cisco Enterprise Linux (CEL), however the concepts listed below, may be applied to Centos, however we do not support Centos.</strong></p>
            </div>
            <div className="card text-left w-100">
                <div className="card-header">
                    Method 1: Running the installation and enablement script.
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>This tool should be installed in root’s home directory and left there for use when the CEC password of the user is changed every six months.  We have provided a bash shell script, to attempt to complete the alternative manual steps in Method 2, far below.  We recommend you use the tool, and NOT the manual steps.   Either method, requires you to have the system root password, OR, have the sudo rights to do, "sudo su -" before running the tool.  Do not “sudo su – root”, as that will not enable the correct access.</p>
                        <ol>
                            <li>Login to your CEL workstation, with a terminal window as root user, (or as yourself, then "sudo su -")</li>
                            <li>cd  /root</li>
                            <li>download: /usr/bin/wget http://alln-lb-prod-1/pub/tools/802.1x/dot1xme</li>
                            <li>make executable: chmod  755  /root/dot1xme</li>
                            <li>run tool:  ./dot1xme</li>
                            <li>When prompted, enter your CEC userid</li>
                            <li>When prompted, enter your AD (active directory) password CAREFULLY, there is no validation</li>
                            <li>The script should complete all manual steps below, and result in full authentication.</li>
                            <li>You will need to run this tool, anytime you change your CEC password, however, we recommend you download the latest version of this tool, each time.</li>
                            <li>If you have any concerns or questions with this tool, email, <a href="mailto:cisco-linux-desktop@cisco.com">cisco-linux-desktop@cisco.com</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="card text-left w-100">
                <div className="card-header">
                    Method 2: Manually installing and enabling 802.1x on your CEL host.
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <p>CEL does not contain the wpa_supplicant package, install it.</p>
                        <p>This requires root access. Request root via SFO tool via <a href="http://wwwin-sfo.cisco.com/">http://wwwin-sfo.cisco.com/</a></p>
                        <ol>
                            <li>
                                <pre><code className="language-javascript"># yum install wpa_supplicant</code></pre>
                                <p>If already installed, update to latest version</p>
                                <pre><code># yum update wpa_supplicant</code></pre>
                                <p>For old versions of CEL 5.50 Workstation check which version of wpa_supplicant is installed:</p>
                                <pre><code># rpm -qa wpa_supplicant</code></pre>
                                <p>Compare: (this info is for CEL 5.x ONLY)</p>
                                <p><kbd>wpa_supplicant-0.5.10-9.el5.x86_64</kbd> does not support hashed pw</p>
                                <p><kbd>wpa_supplicant-0.5.10-10.el5.x86_64</kbd> (or higher) supports hashed pw</p>
                                <p>If your wpa_supplicant is "10-9", you will need to reimage.</p>
                                <p>Temp workaround: 10-9, will work with a cleartext password. Cleartext passwords are not Infosec approved</p>
                            </li>
                            <li>
                                <p>Generate an MD4 hash with your current CEC password:</p>
                                <pre><code># echo -n YourCurrentCECpassword | iconv -t utf16le | openssl md4</code></pre>
                                <div className="w-100"></div>
                                <pre><code># f021a6f2de7d62d69131842d6dbbb4d0 (this is an example)</code></pre>
                            </li>
                            <li>
                                <p>Edit the /etc/wpa_supplicant/wpa_supplicant.conf, replicate below, using your own CEC userid and the generated hash from above.</p>
                                <pre>
                                    <code>ctrl_interface=/var/run/wpa_supplicant</code>
                                    <code>ap_scan=0</code>
                                    <code>network=&#122;</code>
                                    <code>key_mgmt=IEEE8021X</code>
                                    <code>eap=PEAP</code>
                                    <code>identity="cecusername"</code>
                                    <code>password=hash:f021a6f2de7d62d69131842d6dbbb4d0</code>
                                    <code>eapol_flags=0</code>
                                    <code>&#125;</code>
                                </pre>
                                <p>DO NOT enclose the hash:password within quotes</p>
                                <p>If you must use a cleartext password, DO enclose is with double quotes.</p>
                                <p>However, ALWAYS enclose the lowercase userid within double quotes.</p>
                            </li>
                            <li>
                                <p>Edit the /etc/sysconfig/network and change (or add) the <code>NETWORKDELAY=30</code> setting.</p>
                            </li>
                            <li>
                                <p>Verify the correct INTERFACES and DRIVERS are set in <kbd>/etc/sysconfig/wpa_supplicant</kbd></p>
                                <p>INTERFACES should likely be: <pre><code>-i  eth0</code></pre> and DRIVERS should be <pre><code>-D  wired</code></pre></p>
                                <p>Remove the "-u" option, it will break the supplicant start. If your host does not use “eth0”, then change to what you use.</p>
                            </li>
                            <li>
                                <p> Login to host, open another term window, and monitor log: <kbd>tail -f /var/log/wpa_supplicant.log</kbd></p>
                            </li>
                            <li>
                                <p>TEST start the client with this command:</p>
                                <pre><code># wpa_supplicant -i eth0 -D wired -B -c /etc/wpa_supplicant/wpa_supplicant.conf -f /var/log/wpa_supplicant.log</code></pre>
                            </li>
                            <li>
                                <p>Verify proper authentication using this command:</p>
                                <pre><code># wpa_cli  status</code></pre>
                            </li>
                            <li>
                                <p>If it worked, then set the system to automatically restart the wpa_supplicant on reboot with:</p>
                                <pre><code># chkconfig wpa_supplicant on</code></pre>
                            </li>
                            <li>
                                <p>For all versions of CEL 5.x, you will need to modify the symbolic links under /etc/rc.d/rc5.d/ (assuming you run in runlevel 5) S12wpa_supplicant</p>
                                <pre>
                                    <code># cd /etc/rc.d/rc5.d</code>
                                    <code># rm S12wpa_supplicant</code>
                                    <code># ln -s ../init.d/wpa_supplicant  S24wpa_supplicant</code>
                                </pre>
                                <p>NOTE: if you use runlevel 3, you will want to make this same change there.</p>
                            </li>
                            <li><p>Reboot and test</p></li>
                            <li><p>Remember to update the hashed password in <kbd>/etc/wpa_supplicant/wpa_supplicant.conf</kbd> every six months when you change your CEC password</p></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
