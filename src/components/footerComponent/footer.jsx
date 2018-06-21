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
                        <li><a href="#">About Us</a></li>
                        <li><a href="contact.php">Contact Us</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            
                <div class="col-sm">
                    <h3 class="footer_h3">Useful Links</h3>
                    <ul class="footer_ul">
                        <li><a href="#">Space Adventure</a></li>
                        <li><a href="#">Mr. Chicken</a></li>
                        <li><a href="#">3D Soccer</a></li>
                        <li><a href="#">Ramses Treasure</a></li>
                        <li><a href="#">Lucky Christmas</a></li>
                    </ul>
                </div>
            
                <div class="col-sm"> 
                    <h3 class="footer_h3 fb">Facebook</h3>
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
