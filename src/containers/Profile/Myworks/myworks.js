import React,{Component} from 'react';
import './myworks.less'
export default class Myworks extends Component{
    render(){
        return (
            <div className="works-top">
                <div className="left" onClick={()=>this.props.history.goBack()}><a href="#" className="back"><i>&lt;</i></a></div>
                <div className="collect-middle">我的作品</div>

                <div className="list-works">
                    <ul>
                        <li className="list">
                            <div className="item">
                                <a href="">
                                <div className="picture">
                                    <div className="img"/>
                                </div>
                            </a>
                            </div>
                        </li>
                        <li className="list">
                            <div className="item">
                                <a href="">
                                    <div className="picture">
                                        <div className="img"/>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <p className="end">没有更多作品了~</p>
                </div>
            </div>
        )
    }
}