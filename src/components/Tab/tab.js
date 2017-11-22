import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './tab.less';
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
 class Tab extends Component{
    componentDidMount(){
        this.props.validate();
    }
    render(){
        console.log(this.props.code);
         let  code=this.props.code||1;
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
                    <NavLink to="/lesson/course">
                        <i className="icon-lesson"/>
                        <span>工具</span>
                    </NavLink>
                    {this.props.code===1?<NavLink to="/profile">
                        <i className="icon-profile"/>
                        <span>我的</span>
                    </NavLink>:<NavLink to="/person">
                        <i className="icon-profile"/>
                        <span>我的</span>
                    </NavLink>}

                </nav>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Tab)