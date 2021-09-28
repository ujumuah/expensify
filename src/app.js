import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
 import "./css/global.scss"
 import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/lib/css/_datepicker.css'
import configStore from './redux-sample/store/configStore'
 import visibleExpense from './redux-sample/selector/visibleStore'
import App from "./collector"
    const store = configStore();
     const state = store.getState();
    visibleExpense(state.expenses,state.filter);
    const jsx =(
        <Provider store={store}>
        <App/>
        </Provider>
    );
  //  web router
 ReactDOM.render(jsx,
    document.getElementById("app"))
 