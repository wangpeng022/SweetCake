import React, {Component} from 'react';
import Header from "../../components/Header/header";
import {NavLink, Route, Link} from "react-router-dom"
import "./speech.less"
import {connect} from "react-redux"
import {store} from '../../store';
import actions from '../../store/actions/works';
export default class Speech extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Link to={'/home'} className="other-back"/>
                    <span className="middle">草稿箱</span>
                    <Link to={"/home"} className="speech-right"/>
                </Header>
                <div className="speech">
                    <ul>
                        <li>
                            <img
                                src="https://hbimg.b0.upaiyun.com/79fda125231e822923277709055e944a74d70eb11a4e2-mrSf75_fw658"
                                alt=""/>
                            <div className="footer">
                                <div className="footer-title">
                                    <h4>bfbf rgrg</h4>
                                    <span>面包</span>
                                    <small><span>收藏 5</span></small>
                                    <small><span> - 评论 2</span></small>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                {/*<div className="home-list-new">
                    <ul>
                        {this.props.list.length ?
                            this.props.list.map((item, index) => (
                                <li key={index}>
                                    <img src={item.url} alt=""/>
                                    <div className="footer">
                                        <div className="footer-title">
                                            <h4>{item.title}</h4>
                                            <span>{item.family}</span>
                                            <small><span>收藏 {item.collect || 0}</span></small>
                                            <small><span> - 评论 {item.comment_count || 0}</span></small>
                                        </div>
                                    </div>
                                </li>
                            )) : null
                        }

                    </ul>
                </div>*/}
            </div>
        )
    }
}
export default connect(store => store.user, actions)();