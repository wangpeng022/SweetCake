import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Search from "../search";


export default class Recipe extends Component {
    render() {
        //let item = this.props.location.state ? this.props.location.state.item : [];
        console.log(this.props);
        return (
            <div className="recipe">
                {this.props.location.state ? <div className="recipe-header">{this.props.location.state.item.category_name}</div> : null}
                <div className="recipe-body">
                    <p>发现</p>
                    <ul className="recipe-list">
                        {
                            this.props.searchList.map((item, index) => (
                                <li key={index} className="">
                                    <Link to="/">
                                        <img src={item.recipe_img} alt=""/>
                                        <div className="recipe-info">
                                            <span className="recipe-title">{item.recipe_name}</span>
                                            <span className="recipe-msg">{item.recipe_info}</span>
                                            <span className="recipe-date">{item.author} {item.create_time}</span>
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