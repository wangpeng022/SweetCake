import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './register.less'
export default class Register extends Component{
    render(){
        return (
            <div className="base">
                <div className="register-img"/>
                <div className="register-bg"/>

                <div className="register-head">
                    <div className="left">
                        <a href=""><i>&lt;</i></a>
                    </div>
                    <div className="center register">注册</div>

                    <div className="right">
                        <Link to={'/login'}>登录</Link>
                        {/*<input type="text"/>*/}
                    </div>
                </div>

                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input type="text" placeholder="请输入11位手机号码"/>
                        </div>
                        <div className="password">
                            <input type="password" placeholder="请设置密码"/>
                            <button type="button" className="btn">注册</button>
                        </div>
                        <div className="goto">
                            <a href="">已有账号？去登录</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}