import React from 'react';
import '../styles/index.css';
import Logo from '../logo.svg';

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className='navbar navbar-default'>
              <div className='container-fluid'>
                <div className='navbar-brand'>
                  <img style={{height: '60px', width: '60px'}} alt="React" src={Logo} />
                </div>
                <div className='navbar-header'>
                  <h3 className='navbar-text'> Play What!? </h3>
                </div>
              </div>
            </nav>
        )
    }
}
