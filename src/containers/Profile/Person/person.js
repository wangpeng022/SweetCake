import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './person.less'
export default class  Person extends Component{
    render(){
        return (
            <div className="person-content">
                {/*//第一部分：头部 个人信息*/}
               <div className="person-head">
                   <div className="content">
                       <a href="">
                           <img src="http://p4.gexing.com/G1/M00/C8/2B/rBACFFL3IbnRLRtRAAAgPkR0kXc844_200x200_3.jpg?recache=20131108" alt=""/>
                       </a>
                       <input type="hidden" className="sex"/>
                       {/*//显示用户手机号*/}
                       <div className="person-name">111222333444</div>
                       {/*//显示 关注  粉丝*/}
                       <div className="data">
                           <div className="attention">
                               <span className="attention-count">关注 1</span>
                           </div>
                           <div className="fans">
                               <span className="fans-count">粉丝 3</span>
                           </div>
                       </div>

                   </div>
               </div>

                {/*第二部分：内容区域  */}
                <div className="set-content">
                    <ul>
                        <a href="">
                            <span>我的收藏</span>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>
                    <ul>
                        <a href="">
                            <span>我的作品</span>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>
                </div>
                <div className="set-content">
                    <ul>
                        <a href="">
                            <span>消息中心</span>
                            <p className="msgCenter"><i>&gt;</i></p>
                        </a>
                    </ul>
                </div>
                <div className="set-content">
                    <ul>
                        <a href="">
                            <span>手机号</span>
                            <p className="phoneContent">111222333444</p>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>
                    <ul>
                        <a href="">
                            <span>修改密码</span>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>

                    <ul>
                     <li>
                         微博
                         <p className="no-bind">未绑定</p>
                     </li>
                        <div className="bind-status">
                            <div className="switch">
                                <div className="btn"></div>
                            </div>
                        </div>
                    </ul>
                </div>

                {/*退出登录按钮*/}
                <div className="sign-out">
                    <button className="person-out"><Link to={'/home'}>退出登录</Link></button>
                </div>
            </div>
        )
    }
}