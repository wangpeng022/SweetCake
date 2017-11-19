import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink,Redirect} from 'react-router-dom';
import './app.less';
import Home from "../Home/index";
import Lesson from "../Lesson/lesson";
import Profile from "../Profile/profile";
import Tab from "../../components/Tab/tab";
import Search from "../../components/Search/search";
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/lesson" component={Lesson}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/search/:from" component={Search}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/home"/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}
