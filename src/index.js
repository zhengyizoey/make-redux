import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './AppContext';
import App from './AppRedux';
import {store, Provider} from './MakeRedux';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


//renderApp();
