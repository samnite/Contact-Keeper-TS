import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Alerts from './components/layout/alerts';
import PrivateRoute from './components/routing/private-route';

import './app.css';
import ContactState from './context/contact/contact-state';
import AuthState from './context/auth/auth-state';
import AlertState from './context/alert/alert-state';
import setAuthToken from './utils/set-auth-token';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
