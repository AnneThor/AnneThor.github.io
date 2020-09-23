import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default function App() {

    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
      </div>
    );

}
