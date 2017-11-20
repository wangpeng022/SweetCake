import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './Login.less'
export default class Login extends Component{
    render(){
        return (
            <div className="base">
                <div className="register-img"/>
                <div className="register-bg"/>

                <div className="register-head">
                    <div className="left">
                        <a href=""><i>&lt;</i></a>
                    </div>
                    <div className="center register">登录</div>

                    <div className="right">
                        <Link to={'/register'}>注册</Link>
                        {/*<input type="text"/>*/}
                    </div>
                </div>

                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input type="text" placeholder="请输入11位手机号码"/>
                        </div>
                        <div className="password">
                            <input type="password" placeholder="请输入密码"/>
                            <button type="button" className="btn"><Link to={'/person'}>登录</Link></button>
                        </div>
                        <div className="goto">
                            <a href="">忘记密码？找回密码</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}