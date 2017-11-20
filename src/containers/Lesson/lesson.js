import React, {Component} from 'react';
import './lesson.less';
import Header from "../../components/Header/header.js";
import "../../components/Header/header.less";
import {HashRouter as Router,Route,NavLink, Link} from 'react-router-dom';
import Course from "./course/course";
import Pack from "./pack/pack";
import {connect} from 'react-redux'
import actions from '../../store/actions/lesson'
import {upMore,downRefresh} from '../../utils/util.js'
class Lesson extends Component {
    componentDidMount(){
        this.props.getLessons();//获取教程列表数据
        //上拉加载更多
        upMore(this.refs.content,this.props.getLessons);
        downRefresh(this.refs.content,this.props.refresh)
    }
    render() {
        //console.log(this.props.lessons,this.props.hasMore);
        return (
            <div>
                <Header>
                    {
                        <div className="lesson-header">
                            <Link className="left-link" to="/search"/>
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
                <div ref="content" className="lesson-content">
                    <Route  path="/lesson/pack"/>
                        <Pack/>
                    <Route  path="/lesson/course"/>
                        <Course lessons={this.props.lessons} getLessons={this.props.getLessons}/>
                </div>

            </div>
        )
    }
}
export default connect(
    state=>state.lessons,//{hasMore:true, lessons:[{},{},{}...],}}
    actions
)(Lesson)