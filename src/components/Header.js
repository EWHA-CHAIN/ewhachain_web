import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'
import logo from '../static/image/logo.png'

const Header = () => {
  return(
    <header id="Header">
      <nav className="nav-bar">
        <div className="nav-bar-div">
          <div className="nav-left">
            <img className="header_logo" src={logo} alt="logo"/>
            <div className="header_logo_txt">
              <div className="sub_txt">이화여자대학교 블록체인 학회</div>
              <div className="main_txt diff">EWHA-CHAIN</div>
            </div>
          </div>
        <ul className="nav-right">
          <li><NavLink exact to="/" activeStyle={{ fontWeight: 900 }}>Home</NavLink></li>
          <li><NavLink to="/portfolio" activeStyle={{ fontWeight: 900 }}>Portfolio</NavLink></li>
          <li><NavLink to="/recruiting" activeStyle={{ fontWeight: 900 }}>Recruiting</NavLink></li>
          <li><NavLink to="/alumni" activeStyle={{ fontWeight: 900 }}>Alumni</NavLink></li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
