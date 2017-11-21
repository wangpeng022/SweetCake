import React,{Component} from 'react';
import {render} from 'react-dom';
import './pack.less'
import {Route, NavLink, Link, Redirect, Switch} from 'react-router-dom';
import First from '../First/first.js'

export default class Pack extends Component{
    render(){
        //console.log(this.props.prefer,this.props.lessons);//[{…}, {…}],[{…}, {…}, {…}, {…}]
        return (
                <ul className="pack-header">
                    {
                        this.props.prefer?(
                            this.props.prefer.map((item,index)=>(
                                <li key={index}>
                                    <Link to={{pathname:'/lesson/pack/first',state:item}}>
                                        <img src={item.url} alt=""/>
                                        <div className="bac"></div>
                                        <div className="title">
                                            <p className="big-title">{item.bigTitle}</p>
                                            <p>共{item.lessonNum}个课程</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        ):null
                    }
                    <Route path="/lesson/pack/first" component={First}/>
                </ul>
        )
    }
}
{/*render={() => (<First lessons={this.props.lessons} getLessons={this.props.getLessons}/>)}*/}