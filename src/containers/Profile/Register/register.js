import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './register.less'
import {connect} from 'react-redux';
import actions from  '../../../store/actions/session'
 class Register extends Component{
componentDidMount(){

    console.log(this.phone.value,1111);
}
     registers=()=>{
         let phone=this.phone.value;
         let password=this.password.value;
         let confirmPassword=this.confirmPassword.value;

         if(!!phone&&!!password&&!!confirmPassword&&password===confirmPassword){
             console.log(phone);
             this.props.register({phone,password});
         }
     };
    render(){
        console.log(this.props);

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
                            <input ref={input=>this.phone=input} type="text" placeholder="请输入11位手机号码"/>
                        </div>
                        <div className="password">
                            <input ref={input=>this.password=input} type="password" placeholder="请设置密码"/>
                        </div>
                        <div className="confirm-password">
                            <input ref={input=>this.confirmPassword=input} type="password" placeholder="请确认密码"/>
                            <button
                                onClick={this.registers}
                                className="btn" >注册</button>
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
export default connect(
    state=>state.session,
    actions
)(Register)