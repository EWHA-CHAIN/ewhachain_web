import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Recruiting from '../components/Recruiting'
import Header from "../components/Header";
import AlumniAuth from "./AlumniAuth";
import Footer from '../components/Footer';

export default () => (
  <Router>
    <Header/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/alumni" component={AlumniAuth}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route exact path="/recruiting" component={Recruiting}/>
    <Footer/>
  </Router>
)
