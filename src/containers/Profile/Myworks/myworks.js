import React, {Component} from 'react';
import './myworks.less'
import {connect} from 'react-redux';
import actions from '../../../store/actions/works';



class Myworks extends Component {
    constructor(){
        super();
        this.state={
            works:[]
        }
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user')).id;
        console.log(user);
        this.props.getUser(user);
    }

    componentWillReceiveProps(props){
        console.log(props);
        this.setState({works:props.works})
    }
    render() {
        console.log(this.props);
        return (
            <div className="works-top">
                <div className="left" onClick={() => this.props.history.goBack()}><a href="#"
                                                                                     className="back"><i>&lt;</i></a>
                </div>
                <div className="collect-middle">我的作品</div>

                <div className="list-works">
                    <ul>
                        {this.state.works.map((item,index)=>{
                            return (
                                <li key={index} className="list">
                                    <div className="item">
                                        <a href="">
                                            <div className="picture">
                                                <img src={item.url} className="img"/>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <p className="end">没有更多作品了~</p>
                </div>
            </div>
        )
    }
}

export default connect(state => state.user, actions)(Myworks);