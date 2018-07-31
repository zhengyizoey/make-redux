import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Title extends Component {
  constructor(props) {
    super(props)
  }
  
  static contextTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    changeName: PropTypes.func,
  }
  
  render() {
    console.log(this.context);
    return <div onClick={this.context.changeName.bind(this, this.context.header === '猪猪逃' ? '跑辣' : '猪猪逃')}>Title---> {this.context.header}</div>
  }
}