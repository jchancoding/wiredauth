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
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pc" component={PC} />
              <Route path="/mac" component={Mac} />
              <Route path="/remote" component={Remote} />
              <Route path="/linux" component={Linux} />
              <Route path="/cel" component={Cel} />
              <Route path="/redhat" component={Redhat} />
              <Route path="/fedora" component={Fedora} />
              <Route path="/ubuntu" component={Ubuntu} />
              <Route path="/ethernet" component={Ethernet} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
