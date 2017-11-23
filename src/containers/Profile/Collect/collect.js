import React,{Component} from 'react';
import './collect.less';

export default class Collect extends Component{
    render(){
        return (
            <div className="collect-top">
                {/*头部：我的收藏*/}
                <div className="left"><a href="" className="back"><i>&lt;</i></a></div>
                <div className="collect-middle">我的收藏</div>


                <a className="collect-class">方子 / 教程
                  <div className="border"/>
                </a>

                {/*收藏列表*/}
                <ul className="collect-lists">
                    <li>
                        <a href="">
                            <div className="collect-img"></div>
                            <div className="background"/>
                        </a>
                        <div className="collect-tittle">
                            <p className="big-title">咸蛋黄肉松贝果</p>
                            <p className="small-title">面包</p>
                        </div>
                        <div className="collect-data">
                            收藏 9
                            <span>·</span>
                            评论 7
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}