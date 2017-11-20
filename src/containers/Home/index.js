import React, {Component} from 'react';
import './index.less';
import Header from "../../components/Header/header";
import {Link} from 'react-router-dom';
import "../../components/Header/header.less";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import Swiper from "./Swiper/index";

class Home extends Component {
    componentDidMount(){
        this.props.getHList();
    }
    render() {
        // console.log(this.props.home);
        console.log(this.props.slider);
        let mySlider=this.props.slider||[];
        return (
            <div>
                <Header>
                    {
                        <div className="container-header">
                            <Link className="left-link" to="/search/home"/>
                            <span>焙忘录</span>
                            <Link className="right-link" to="/gift"/>
                        </div>
                    }
                </Header>
                <div className="home-content">
                    <Swiper slider={mySlider}/>
                </div>
            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home);