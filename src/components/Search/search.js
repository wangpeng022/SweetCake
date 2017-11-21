import React, {Component} from 'react';
import {Link, Route,withRouter} from 'react-router-dom';
import {getFood, getSearch, searchFood} from '../../api/search';
import {connect} from 'react-redux';
import Catalog from "./catalog/index";
import Recipe from "./Recipe/recipe";
import actions from "../../store/actions/search";

let star = ['一', '二', '三', '四', '五'];
//@connect(state=>state.search,actions)
let recent = [];
let url = '';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: {
                data: [],
            },
            recent: [],
            flag: true,
        }
    };


    componentDidMount() {
        getSearch().then(data => {
            this.setState({search: data})
        });
        this.state.recent = (JSON.parse(localStorage.getItem('search')) || []);
    }


    starClick = (index) => {
        getFood(index).then(data => {
            console.log(data);
        });
    };
    handleClick = (e) => {
        let value = this.$input.value;
        if (value) {
            recent = (JSON.parse(localStorage.getItem('search')) || []);
            e.preventDefault();
            recent.push(value);
            localStorage.setItem('search', JSON.stringify(recent));
            this.props.history.replace(`/search/home/${this.$input.value}`);
            this.props.searchFood({searchFood:this.$input.value,limit:3});
        }
    };
    handleKeyUp = (e) => {
        let keyCode = e.keyCode;
        if (e.target === this.$input && keyCode === 13) {
            this.props.searchFood({searchFood:this.$input.value,limit:3});
            this.handleClick(e);
            this.props.history.replace(`/search/home/${this.$input.value}`);
        }
    };
    handleFocus = () => {
        this.setState({flag: true});
        this.props.history.replace('/search/home');
    };

    render() {
        console.log(this.props);
        url = this.props.location.pathname;
        console.log(url);
        return (
            <div className="home-search" onKeyUp={this.handleKeyUp}>
                <div className="search-header">
                    <div onClick={() => {
                        this.state.flag = true;
                        this.props.history.goBack()
                    }} className="search-back">
                        <i>{null}</i>
                    </div>
                    <div className="search-content">
                        <i className="">{null}</i>
                        <input onFocus={this.handleFocus} ref={input => this.$input = input} type="text"
                               placeholder="搜索"
                               className="search-input"/>
                        <div onClick={() => {
                            this.$input.value = '';
                        }} className="search-clear">{null}
                        </div>
                    </div>
                    <input onClick={this.handleClick} type="submit" value="搜索" className="search-submit"/>
                </div>
                {
                    url === '/search/home' || url === '/search/lesson' ? <div className="search-catalog">
                        <div className="search-record">
                            <div className="record-catalog">
                                <span>最近搜索</span>
                                <a onClick={() => {
                                    localStorage.clear();
                                    this.setState({
                                        recent: [],
                                    });
                                }} href="javascript:;">清空</a>
                            </div>
                            <ul className="record-list">
                                {
                                    this.state.recent.map((item, index) => (
                                        <li onClick={() => {
                                            this.$input.value = item;
                                        }} key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            url === '/search/home' ?
                                <div className="search-classify">
                                    <div className="classify-catalog">
                                        <span>类别</span>
                                    </div>
                                    <ul className="classify-list">
                                        {
                                            this.state.search.data.map((item, index) => (
                                                <li key={index}><Link
                                                    to={{pathname: `/search/home/${index}`, state: {index, item}}}
                                                    onClick={() => {
                                                        this.setState({flag: false});this.props.searchIndex({index})
                                                        console.log(this.props);
                                                    }}>{item.category_name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div> : null}
                        <div className="star-level">
                            <div className="star-diff">
                                <span>难度</span>
                            </div>
                            <ul className="star-list">
                                {
                                    star.map((item, index) => (
                                        <li onClick={() => {
                                            this.starClick(index)
                                        }} key={index}>{item + '星'}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div> : null
                }
                {/*<Route path="/search/:from/:id" searchList={this.props.searchList} component={Recipe}/>*/}
                <Route path="/search/:from/:id" render={(props)=>{
                    return <Recipe {...props} searchList={this.props.searchList} searchFood={this.props.searchFood}/>
                }}/>
            </div>

        )
    }
}
import './search.less';

export default connect(state => state.search, actions)(Search);