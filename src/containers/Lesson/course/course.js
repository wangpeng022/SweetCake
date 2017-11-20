import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux'
import actions from '../../../store/actions/lesson'
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './course.less';
let num;
let ary = [1, 2, 3, 4, 5];
export default class Course extends Component {
    render() {
        console.log(this.props.lessons ? this.props.lessons : '');
        return (
            <ul>
                {
                    this.props.lessons ? (
                        this.props.lessons.map((item, index) => {
                            num = Math.round(Math.random() * 4 + 1);
                            return (<li key={index}>
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
                                            {
                                                ary.map((item, index) => {
                                                        return <i key={index}
                                                                  className={item < num ? 'level' : ''}> </i>
                                                    }
                                                )
                                            }

                                        </div>
                                    </a>
                                </div>
                            </li>)
                        })
                    ) : null
                }
                <div className="load-status" onClick={this.props.getLessons}>
                    {
                        this.props.loading ? '加载中' :
                            this.props.hasMore ? '加载更多' : '已经到达底线'
                    }
                </div>

            </ul>

        )
    }
}
/*export default connect(state=>state.lessons,actions)(Course)*/

