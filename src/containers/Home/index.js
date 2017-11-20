import React, {Component} from 'react';
import './index.less';
import Header from "../../components/Header/header";
import {Link} from 'react-router-dom';
import "../../components/Header/header.less";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import ReactSwipe from "react-swipe"
import Swiper from "./Swiper/Swiper";
import HomeListNew from "./HomeListNew/HomeListNew";
import HomeListHot from "./HomeListHot/HomeListHot";
import "./index.less"


class Home extends Component {
    componentDidMount(){
        this.props.getHList();
    }
    render() {
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
                    <div>
                        <span>最新</span>
                        <span>热门</span>
                    </div>
                        <ReactSwipe className="carousel" >
                        <HomeListNew list={this.props.list}/>
                        </ReactSwipe>
                </div>
            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home);