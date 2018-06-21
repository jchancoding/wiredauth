import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/home/cisco_logo.png';
import './header.css'

export default class Header extends Component {
    render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <img src={logo} alt="Cisco Logo" id="logo" />
            <Link className="navbar-brand" to="/">Wired Authentication Support Page</Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div classNameName="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
        </nav>
    )
    }
}
