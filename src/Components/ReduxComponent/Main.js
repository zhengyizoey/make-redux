
import React, { Component } from 'react';
import Content from './Content';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log('render Header')
    return <div>
      Main:
      <Content/>
    </div>
  }
}
