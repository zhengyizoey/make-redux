import React, { Component } from 'react';
import PropTypes from 'prop-types';

let appState = {
  title: {
    text: '白杨树',
    color: 'pink'
  },
  content: {
    text: '到夏天了',
    color: 'green'
  }
};

function renderTitle(title, odlTitle) {
  if (odlTitle && title === odlTitle) {
    return
  }
  console.log('render title');
  let dom = document.getElementById('title');
  dom.innerHTML = title.text;
  dom.style.color = title.color;
  dom.onclick = () => {
    //appState.title.color = 'blue';
    //stateChange(appState, {type: 'CHANGE-TITLE-COLOR', color: 'blue'});
    let state = store.getState();
    store.dispatch({type: 'CHANGE-TITLE-COLOR', color: state.title.color === 'blue' ? 'pink' : 'blue'});
    //renderApp(appState)
  }
}

function renderContent(content, oldContent) {
  if (oldContent && content === oldContent) {
    return
  }
  console.log('render content');
  let dom = document.getElementById('content');
  dom.innerHTML = content.text;
  dom.style.color = content.color;
}

function renderApp(state, oldState={}) {
  if (oldState && state === oldState) {
    return
  }
  renderTitle(state.title, oldState.title);
  renderContent(state.content, oldState.content);
}

function stateChange(state, action={}) {
  if (!state) {
    state = appState
  }
  
  switch (action.type) {
    case 'CHANGE-TITLE-COLOR':
      return {...state,
        title: {...state.title,
          color: action.color,
        }
      };
      //state.title.color = action.color;
      //return state;
    case 'CHANGE-TITLE-TEXT':
      return {...state,
        title: {...state.title,
          text: action.text,
        }
      };
    
    default:
      return state
  }
}

// getState =>
// dispatch => changeState -> apply listeners with new state
function createStore(stateChange) {
  let state = stateChange(null, {});  // 初始化
  let listeners = [];
  function subscribe(listener) {
    listeners.push(listener)
  }
  function getState() {
    return state
  }
  function dispatch(actions) {
    let newState = stateChange(state, actions);
    listeners.forEach((listener) => {
      listener(newState, state)
    });
    state = newState
  }
  return {subscribe, getState, dispatch}
}

//let store = createStore(stateChange);

//store.subscribe((newState, state) => {
//  renderApp(newState, state);
//});

let connect = (mapStateToProps, mapDispatchToProps) => (InnerComponent) => {
  class WrappedComponent extends React.Component {
  
    static contextTypes = {
      store: PropTypes.object,
    }
    
    componentWillMount() {
      this._update();
      this.context.store.subscribe((newState, state) => {this._update(newState, state)})
    }
  
    _update(newState) {
      let state = newState ? newState : this.context.store.getState();
      let dispatch = this.context.store.dispatch;
      let stateProps = mapStateToProps ? mapStateToProps(state, this.props) : state;
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(dispatch, this.props) : {};
      this.setState({
        allProps: {
            ...stateProps,
            ...dispatchProps,
        }
      })
    }
  
    render() {
      return <InnerComponent {...this.state.allProps} />
    }
  }

  return WrappedComponent
};

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  static childContextTypes = {
    store: PropTypes.object,
  }
  
  getChildContext() {
    return {
      store: this.props.store,
    }
  }
  
  render() {
    return <div>{this.props.children}</div>
  }
}

let reducer = function (state, action) {
  if(!state) {
    return {
      title: {
        text: '猪猪逃',
      },
      content: {
        text: '跑辣',
      },
      themeColor: 'pink'
    }
  }
  switch (action.type) {
    case 'CHANGE_TITLE' :
      return {...state,
        title:{...state.title,
          text: action.data
        }
        
      };
    default:
      return state
  }
};

let store = createStore(reducer);




renderApp = renderApp.bind(this, appState);

export {
  renderApp,
  createStore,
  stateChange,
  connect,
  Provider,
  store
};
//renderApp(appState);