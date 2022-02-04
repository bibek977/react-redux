import React from "react";
import ReactDOM from "react-dom";
// import App from './App'
// import store from './Store'
import {Provider} from 'react-redux'
import mystore from "./Store2";
import Todo from './Todo'
// import mystore from './Store2'


ReactDOM.render(
  <>
  {/* <Provider store= {store}>

  <App></App>
  </Provider> ,*/}
  <Provider store= {mystore}>
    <Todo></Todo>
  </Provider>
  </>,
  document.getElementById('root')
)