import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Search from "../search";


export default class Recipe extends Component {
    render() {
        let item=this.props.location.state?this.props.location.state.item:[];
        console.log(this.props);
        return (
            <div className="recipe">
                <div className="recipe-header">{item.category_name}</div>
                <div className="recipe-body">
                    <p>发现</p>
                    <ul className="recipe-list">
                        {
                            [1,2,3].map((item,index)=>(
                                <li key={index} className="">
                                    <Link to="/">
                                        <img src="http://beile.bakelulu.com.cn//Fu9DmaCT9JtrhVRxvZce5J9yMTYC" alt=""/>
                                        <div className="recipe-info">
                                            <span className="recipe-title">椒盐桃酥</span>
                                            <span className="recipe-msg">花椒粉的加入给桃酥增加了点特殊的风味，敲好吃，要飞起来的感觉…重点是超简单～↵方子来自达人：花脸猫</span>
                                            <span className="recipe-date">Julia 2017-11-08</span>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="recipe-find">
                    <Link to="">
                        <i className="recipe-left">{null}</i>
                        <span>发现更多</span>
                        <i className="recipe-right">{null}</i>
                    </Link>
                </div>
            </div>
        )
    }
}
import './recipe.less';