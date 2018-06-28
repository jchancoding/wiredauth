import React, { Component } from 'react';
import { Route, withRuoter, Link } from 'react-router-dom';
import './footer.css'

export default class Footer extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
      }
    
    render () {
    
    return (
        // <Link className="navbar-brand" to="/">Wired Authentication Support Page</Link>
        
        <footer>
            <div class="container">
                <div class="row">
    
                <div class="col-sm">
                    <h3 class="footer_h3">Laptops / Desktop</h3>
                    <ul class="footer_ul">
                        <li><Link to="/pc" onclick={this.scrollTop}>Windows Laptops</Link></li>
                        <li><Link to="/mac">Mac Laptops</Link></li>
                        <li><Link to="/remote">Remote Desktops</Link></li>
                    </ul>
                </div>
            
                <div class="col-sm">
                    <h3 class="footer_h3">Linux Workstations</h3>
                    <ul class="footer_ul">
                        <li><Link to="/cel">Cisco Enterprise Linux</Link></li>
                        <li><Link to="/redhat">Red Hat</Link></li>
                        <li><Link to="/fedora">Fedora</Link></li>
                        <li><Link to="/ubuntu">Ubuntu</Link></li>
                    </ul>
                </div>
            
                <div class="col-sm"> 
                    <h3 class="footer_h3 fb">Misc</h3>
                    <ul class="footer_ul">
                        <li><Link to="/ethernet">Onsite (In-office) Patching</Link></li>
                        <li><a href="https://pwreset.cisco.com/">Password Management</a></li>
                    </ul>
                </div>
                </div> 
            </div>
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <p>© Copyright   2018. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
    }
}
