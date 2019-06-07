import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import MaterializeCss from 'materialize-css/dist/css/materialize.css'

import App from './components/App';
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDom.render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'))
