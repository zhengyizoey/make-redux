
import React, { Component } from 'react';
import {connect} from '../../MakeRedux';


class Content extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log('render Content-->', this.props)
    return <div>
      Content-->{this.props.content.text}
    </div>
  }
}

export default connect()(Content)