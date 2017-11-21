import React, {Component} from 'react';
import './first.less'
export default class First extends Component {
    render() {
        console.log(this.props);
        console.log(this.props.lessons);
        return (
                <ul className="big-frame">
                    {
                        this.props.lessons.map((item,index)=>(
                            <li className="current" key={index}>
                                <div className="frame">
                                    <a href="#">
                                        <img src={item.url} alt=""/>
                                        <div className="title">{item.title}</div>
                                    </a>
                                    <div className="sign current"></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

        )
    }

}
