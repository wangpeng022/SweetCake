import React,{Component} from 'react';
import './detail.less'
import DetailHeader from "../../components/DetailHeader/detail-header.js";
import {Link} from 'react-router-dom';
export default class Detail extends Component{
    render(){
        //console.log(this.props);
        return (
            <div>
                <DetailHeader>
                    {
                        <div className="detail-header">
                            <div className="left">
                                <Link className="go_home" to="/home">首页</Link>
                            </div>
                            <div className="right">
                                <a href="javascript:;" className="love"><i className="current"></i></a>
                                <Link className="share" to="/share"><span></span></Link>
                            </div>
                        </div>
                    }
                </DetailHeader>
                <div className="content">
                    detail
                </div>
            </div>
        )
    }
}

