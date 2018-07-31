import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import Main from './Components/Context/Main';
import Header from './Components/Context/Header';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      header: '猪猪逃',
      content: ''
    }
  }
  
  static childContextTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    changeName: PropTypes.func,
  }
  
  getChildContext() {
   return {
     ...this.state,
     changeName: (name) => {
       this.setState({header: name})
     }
   }
  }
  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
