import React, {Component} from 'react';
import './index.less';
import Header from "../../components/Header/header";
import {Link} from 'react-router-dom';
import "../../components/Header/header.less";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
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

            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home);