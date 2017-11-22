import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import './app.less';
import Home from "../Home/index";
import Lesson from "../Lesson/lesson";
import Profile from "../Profile/profile";
import Tab from "../../components/Tab/tab";
import Recipe from "../../components/Search/Recipe/recipe";
import Search from "../../components/Search/search"
import Register from "../Profile/Register/register";
import Login from "../Profile/Login/login";
import Person from "../Profile/Person/person";
import Detail from '../Detail/detail.js'

import Collect from '../Profile/Collect/collect'

import Tools from '../Tools/tools.js'

import Gift from "../../components/Header/gift/gift";
import Suff from "../Suff/suff";

import Cover from "./Cover/cover";
/*import First from '../Lesson/First/first'*/

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/Recipe/:from" component={Recipe}/>
                        <Route path="/lesson" component={Lesson}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/suff" component={Suff}/>
                        <Route path="/gift" component={Gift}/>
                        <Route path="/search/:from" component={Search}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/person" component={Person}/>
                        <Route path="/collect" component={Collect}/>
                        <Route path="/tools" component={Tools}/>
                        <Redirect to="/home"/>
                    </Switch>
                    <Tab/>
                    <Cover/>
                </div>
            </Router>
        )
    }
}
