import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './Login.less'
import {connect} from 'react-redux'
import actions from '../../../store/actions/session'
 class Login extends Component{

    signUp=()=>{
      let phone=this.phone.value;
      let password=this.password.value;
      this.props.login({phone,password});
        this.phone.value='';
        this.password.value='';
    };
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
                            <input ref={input=>this.phone=input} type="text" placeholder="请输入11位手机号码"/>
                        </div>
                        <div className="password">
                            <input ref={input=>this.password=input} type="password" placeholder="请输入密码"/>
                            <button
                                onClick={this.signUp}
                                className="btn">登录</button>
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

export default connect(
    state=>state.session,
    actions
)(Login)