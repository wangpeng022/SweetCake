import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App/app";
//Provider组件用来向子组件传递store仓库
ReactDOM.render(
    <App/>
    , document.querySelector('#root'));