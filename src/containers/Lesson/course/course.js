import React, {Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './course.less';

export default class Course extends Component {
    render() {
        console.log(this.props.lessons);
        return (
<<<<<<< HEAD
            <div className="course">
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
                <h1>dada</h1> coursedasdadada
            </div>
=======
            <ul>
                {
                    this.props.lessons.map((item, index) => (
                        <li key={index}>
                            <div className="content">
                                <a href="#">
                                    <div className="img">
                                        <img src={item.url} alt=""/>
                                        <div className="data">
                                            收藏:{item.collect}
                                            <span> · </span>
                                            评论:{item.comment}
                                        </div>
                                    </div>
                                    <div className="title">{item.title}</div>
                                    <div className="Info">
                                        <i className="level"></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                </a>
                            </div>
                        </li>
                    ))
                }
                <div className="load-status" onClick={this.props.getLessons}>
                    {
                        this.props.loading?'加载中':
                        this.props.hasMore?'加载更多':'已经到达底线'
                    }
                </div>
            </ul>
>>>>>>> develop
        )
    }
}


