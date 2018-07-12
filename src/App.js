import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router, 
  Route, 
  withRouter,
  Switch,
  Redirect 
} from 'react-router-dom';
import './App.css';
import axios from 'axios';

import withAuthorization from './withAuthorization';

import Home from './components/homeComponent/home.jsx';
import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';
import PC from './components/pcComponent/pc.jsx';
import Mac from './components/macComponent/mac.jsx';
import Remote from './components/remoteComponent/remote.jsx';
import Linux from './components/linuxComponent/linux.jsx';
import Cel from './components/linuxComponent/celComponent/cel.jsx';
import Redhat from './components/linuxComponent/redhatComponent/redhat.jsx';
import Fedora from './components/linuxComponent/fedoraComponent/fedora.jsx';
import Ubuntu from './components/linuxComponent/ubuntuComponent/ubuntu.jsx';
import Ethernet from './components/ethernetComponent/ethernet.jsx';
import ScrollToTop from './components/ScrollToTopComponent/ScrollToTop.jsx';
import NoMatch from './components/NoMatchComponent/NoMatch.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
        source: null,
        isAuthenticated: null,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  componentDidMount() {  
    const sessionAuth = sessionStorage.setItem('userAuth', null);
    console.log(this.state.source)
    axios.get('http://localhost:49160/static/flying.jpg',
        { 
        headers: {
            'Access-Control-Allow-Origin': '*',
            },
        responseType: 'arraybuffer',
        },
    )
    .then(response => {
        const base64 = btoa(
        new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
        ),
        );
        this.setState({ source: "data:;base64," + base64 })
        if (this.state.source != null) {
            this.login();
        }
    })
    .catch(
        error => console.error('Error:', error)
    );
  }

  login() {
    sessionStorage.setItem('userAuth', true);
    this.setState({
      isAuthenticated: true
    });
  }

  render() {
    const catImage = (
      <img src={this.state.source} />
    )

    const authBox = (
      <div className="container p-0">
          {this.state.isAuthenticated ?
              [
                  <button type="button" className="btn btn-outline-success disabled btn-block my-2">
                      <p>User is Authenticated</p>
                  </button>
              ]
              : <button type="button" className="btn btn-outline-danger disabled btn-block my-2">
                   <p>Invalid Authentication</p>
                </button>
          }
      </div>
    )

    const bodyPage = (
      <Router>
        <ScrollToTop>
          <div>
            <Header />
            <div>
              { authBox }
            </div>
            <Switch>
              <Route exact path="/" component={withAuthorization(this.state.isAuthenticated)(Home)} />
              <Route path="/pc" component={withAuthorization(this.state.isAuthenticated)(PC)} />
              <Route path="/mac" component={withAuthorization(this.state.isAuthenticated)(Mac)} />
              <Route path="/remote" component={withAuthorization(this.state.isAuthenticated)(Remote)} />
              <Route path="/linux" component={withAuthorization(this.state.isAuthenticated)(Linux)} />
              <Route path="/cel" component={withAuthorization(this.state.isAuthenticated)(Cel)} />
              <Route path="/redhat" component={withAuthorization(this.state.isAuthenticated)(Redhat)} />
              <Route path="/fedora" component={withAuthorization(this.state.isAuthenticated)(Fedora)} />
              <Route path="/ubuntu" component={withAuthorization(this.state.isAuthenticated)(Ubuntu)} />
              <Route path="/ethernet" component={withAuthorization(this.state.isAuthenticated)(Ethernet)} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );

    return (
      <div>
        <div>
            { bodyPage }
        </div>
        {/* <div>
            { catImage }
        </div> */}
    </div>
    )
  }
}

export default App;
