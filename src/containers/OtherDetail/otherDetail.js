import React, {Component} from 'react';
import "./otherDetail.less"
import {NavLink, Route, Link} from "react-router-dom"
import Fangzi from "./Fangzi/fangzi";
import Header from "../../components/Header/header";
import {upMore, downRefresh, fixed} from "../../utils/util";

export default class OtherDetail extends Component {
    componentDidMount() {
        upMore(this.refs.other, () => "");
        downRefresh(this.refs.other, () => "");
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header>
                    <span className="other-back"/>
                    <span className="other-right"/>
                </Header>
                <div className="other-content" ref={"other"}>
                    <div className="other-header">
                        <div className="user-info">
                            <div className="pic">
                                <img src="http://beile.bakelulu.com.cn//FqzH1YukVXYuDZ7dNIeiOLxcwQ4Q"/>
                            </div>
                            <h5>李狗蛋</h5>
                            <span>关注：3 </span>&nbsp;&nbsp;
                            <span>粉丝：3 </span>
                            <div className="fork">
                                + 关注
                            </div>
                        </div>
                    </div>
                    {
                        <div className="other-tab">
                            <NavLink to="/other/fangzi">方子</NavLink>
                            < NavLink to="/other/zp">作品</NavLink>
                        </div>
                    }
                    <div className="other-select">
                        <Route path="/other/fangzi" render={() => <Fangzi/>}/>
                        <Route path="/other/zp" render={() => <div className="zp"><p>还没上传作品哦</p>
                            <div className="footer-footer">
                                <p>对，我就是传说中的底线</p>
                                <p>——————————————</p>
                            </div></div>}/>
                    </div>
                </div>
            </div>
        )
    }
}
