import React, {Component} from 'react';
import './lesson.less';
import Header from "../../components/Header/header.js";
import "../../components/Header/header.less";
import {Route, NavLink, Link, Redirect, Switch} from 'react-router-dom';
import Course from "./course/course";
import Pack from "./pack/pack";
import {connect} from 'react-redux'
import actions from '../../store/actions/lesson'
import {upMore,downRefresh} from '../../utils/util.js'
class Lesson extends Component {
    componentDidMount(){
        this.props.getLessons();//获取教程列表数据
        //上拉加载更多
        this.refs.content?upMore(this.refs.content,this.props.refresh):null;
        this.refs.content?downRefresh(this.refs.content,this.props.getLessons):null;
    }
    render() {
        //console.log(this.props.lessons,this.props.hasMore);
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
                <Switch>

                    <Route path="/lesson/course" render={()=>
                        (<div ref="content" className="lesson-content">
                            <Course lessons={this.props.lessons} getLessons={this.props.getLessons}/>
                        </div>)}/>

                    <Route path="/lesson/pack" component={Pack}/>

                    <Route exact path="/lesson" render={() => <Redirect to="/lesson/course"/>}/>
                    <Redirect to="/lesson/course"/>
                    <Route render={() => <h1>你访问的页面不存在,请输入正确的地址,</h1>}/>
                </Switch>



            </div>
        )
    }
}
export default connect(state=>state.lessons,actions)(Lesson)