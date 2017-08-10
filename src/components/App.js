import React, { Component } from 'react';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';
import '../styles/App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <div className='row'>
            <PlayListForm />
              <PlayList />
          </div>
      </div>
    );
  }
}
