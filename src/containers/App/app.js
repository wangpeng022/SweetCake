import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import './app.less';
import Home from "../Home/index";
import Lesson from "../Lesson/lesson";
import Profile from "../Profile/profile";
import Tab from "../../components/Tab/tab";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/lesson" component={Lesson}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}