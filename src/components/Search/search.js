import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getFood, getSearch} from '../../api/search';
import {connect} from 'react-redux';

let star = ['一', '二', '三', '四', '五'];
//@connect(state=>state.search,actions)
let recent = [];
let url = '';
export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: {
                data: [],
            },
            recent: [],
        }
    };

    /*componentWillUpdate() {
        url = this.props.location.state ? this.props.location.state.from : '/';
        url = this.props.location.pathname;
    }*/

    componentDidMount() {
        url = '/' + this.props.match.params.from;
        url = url === '/home' || url === '/lesson' ? url : '/';
        getSearch().then(data => {
            this.setState({search: data})
        });
        this.state.recent = (JSON.parse(localStorage.getItem('search')) || []);
        this.setState({});
    }

    starClick = (index) => {
        getFood(index).then(data => {
            console.log(data);
        });
    };
    handleClick = (e) => {
        console.log(recent);
        recent = (JSON.parse(localStorage.getItem('search')) || []);
        e.preventDefault();
        let value = this.$input.value;
        recent.push(value);
        console.log(recent);
        localStorage.setItem('search', JSON.stringify(recent));
    };

    render() {
        console.log(this.props);
        return (
            <div className="home-search">
                <div className="search-header">
                    <Link to={url} className="search-back">
                        <i>{null}</i>
                    </Link>
                    <div className="search-content">
                        <i className="">{null}</i>
                        <input ref={input => this.$input = input} type="text" placeholder="搜索"
                               className="search-input"/>
                        <div onClick={() => {
                            this.$input.value = '';
                        }} className="search-clear">{null}
                        </div>
                    </div>
                    <input onClick={this.handleClick} type="submit" value="搜索" className="search-submit"/>
                </div>
                <div className="search-catalog">
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
                        url === '/home' ?
                            <div className="search-classify">
                                <div className="classify-catalog">
                                    <span>类别</span>
                                </div>
                                <ul className="classify-list">
                                    {
                                        this.state.search.data.map((item, index) => (
                                            <li key={index}>{item.category_name}</li>
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
                                        console.log(index);
                                        this.starClick(index)
                                    }} key={index}>{item + '星'}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
import './search.less';

connect(state => state.search,)(Search);