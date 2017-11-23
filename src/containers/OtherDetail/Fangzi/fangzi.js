import React, {Component} from 'react';
import "./fangzi.less"

export default class Fangzi extends Component {
    render() {
        return (
            <div className="fangzi">
                <ul>
                    <li>
                        <div className="img-box">
                            <img src="http://beile.bakelulu.com.cn//FtOhEui63a8LTyRrkl2oyCXDSkfY" alt=""/>
                            <div className="cover"/>
                            <div className="footer">
                                <small><span>收藏 0</span></small>
                                <small><span> - 评论 4</span></small>
                            </div>
                        </div>
                        <div className="title">
                            <h4>紫薯麻薯软欧包</h4>
                            <span>面包</span>
                            <div className="author">
                                <img src="http://beile.bakelulu.com.cn//FqzH1YukVXYuDZ7dNIeiOLxcwQ4Q" alt=""/>
                                <span className="wrap">狗蛋</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="footer-footer">
                    <p>对，我就是传说中的底线</p>
                    <p>——————————————</p>
                </div>
            </div>
        )
    }
}
