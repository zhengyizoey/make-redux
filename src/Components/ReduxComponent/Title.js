import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from '../../MiniRedux';
class Title extends Component {
  constructor(props) {
    super(props)
  }
  
  handleClickTitle() {
    if(this.props.handleClickTitle) {
      let data = this.props.title.text === '喵喵' ? '猪猪逃' : '喵喵'
      this.props.handleClickTitle(data)
    }
  }
  
  render() {
    console.log('render Title-->', this.props);
    return <div onClick={this.handleClickTitle.bind(this)}>Title---> {this.props.title.text}</div>
  }
}

let mapStateToProps = (state) => state;

let mapDispatchToProps = (dispatch, props) => {
  return {
    handleClickTitle: (data) => {
    dispatch({type: 'CHANGE_TITLE', data: data})
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Title)