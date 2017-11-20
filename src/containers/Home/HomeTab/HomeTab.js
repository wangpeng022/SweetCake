import React, {Component} from 'react';
import "./HomeTab.less"

export default class HomeTab extends Component {
    render() {
        return (
            <div className="home-list">

                <p>最新</p>

                <ul>
                    {this.props.list.length ?
                        this.props.list.map((item, index) => (
                            <li key={index}>
                                <img src={item.url} alt=""/>
                                <div className="footer">
                                    <div className="footer-title">
                                        <h4>{item.title}</h4>
                                        <span>{item.family}</span>
                                        <small><span>收藏 {item.like || 0}</span></small>
                                        <small><span> - 评论 {item.comment || 0}</span></small>
                                    </div>
                                </div>
                            </li>
                        )) : null
                    }

                </ul>
            </div>
        )
    }
}
