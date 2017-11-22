import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './tab.less';
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
 export default class Tab extends Component{

    render(){

        return (
            <div>
                <nav className="tabs">
                    <NavLink to="/home">
                        <i className="icon-index"/>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/lesson/course">
                        <i className="icon-lesson"/>
                        <span>课程</span>
                    </NavLink>
                    <a href="#"/>
                    <NavLink to="/">
                        <i className="icon-lesson"/>
                        <span>工具</span>
                    </NavLink>
                   <NavLink to="/profile">
                        <i className="icon-profile"/>
                        <span>我的</span>
                    </NavLink>

                </nav>
            </div>
        )
    }
}
