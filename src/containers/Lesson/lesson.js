import React, {Component} from 'react';
import './lesson.less';
import Header from "../../components/Header/header.js";
import "../../components/Header/header.less";
import {Route,NavLink, Link,Redirect} from 'react-router-dom';
import Course from "./course/course";
import Pack from "./pack/pack";

export default class Lesson extends Component {
    render() {
        return (
            <div>
                <Header>
                    {
                        <div className="lesson-header">
                            <Link className="left-link" to="/search/lesson"/>
                            <div className="tabs-header">
                                <NavLink className="coursePack course" to="/lesson/course"><span>教程</span>
                                </NavLink>
                                <NavLink className="coursePack pack" to="/lesson/pack"><span>课程包</span>
                                </NavLink>
                            </div>
                            <Link className="right-link" to="/gift"/>
                        </div>
                    }
                </Header>
                <Route  path="/lesson/course" component={Course}/>
                <Route  path="/lesson/pack" component={Pack}/>
                <Route  exact path="/lesson" render={()=><Redirect to="/lesson/course"/>}/>
            </div>
        )
    }
}