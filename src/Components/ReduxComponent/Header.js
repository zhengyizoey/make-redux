import React, { Component } from 'react';
import Title from './Title';
export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log('render HEADER')
    return <div>
      header:
      <Title/>
    </div>
  }
}

