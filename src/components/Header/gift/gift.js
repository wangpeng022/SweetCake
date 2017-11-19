import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Gift extends Component {
    render() {
        return (
            <div>
                <div className="gift-container">
                    <Link to="/">
                        <i></i>
                    </Link>
                </div>
                <div className="gift-content">
                    <div className="gift-box">
                        <p>请输入兑换码</p>
                    </div>
                    <input type="button"/>
                </div>
                <p></p>
            </div>
        )
    }
}
