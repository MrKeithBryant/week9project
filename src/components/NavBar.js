import React from 'react';
import '../styles/index.css';
import Logo from '../logo.svg';

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-default'>
            <div className='container-fluid'>
            <div className='navbar-header'>
            <div className='navbar-brand'>
            <div className='header-logo-container'>
            <img className='logo' alt="React" src={Logo} />
            <h3 className="navbar-text">Play What?!</h3>
            </div>
            </div>
            </div>
            </div>
            </nav>
        )
    }
}
