
import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import Main from './Components/ReduxComponent/Main';
import Header from './Components/ReduxComponent/Header';
import {createStore,} from './MakeRedux';




class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  //static childContextTypes = {
  //  store: PropTypes.object,
  //}
  //
  //getChildContext() {
  // return {
  //    store: store,
  //  }
  //}
  //
  
  render() {
    console.log('render APP')
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}




export default App;
