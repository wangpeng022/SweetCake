import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, NavLink} from 'react-router-dom';
import Header from "../../components/DetailHeader/detail-header";

export default class Works extends Component {
    constructor() {
        super();
        this.state = {
            title: '',//标题
            star: '',//控制点击出现几个星星,
            index: 'S',//控制点击切换人份,个数,
            part: 2,//份量
            describe:'',//描述
            file:'',
        }
    }
    handleSubmit=()=>{
        if(this.state.title&&this.state.file&&this.describe){

        }
    };
    //创建预览图,获取图片url,
    handleClick = () => {
        console.log(this.$file.files);
        let url = window.URL.createObjectURL(this.$file.files[0]);
        console.log(url);
        this.$img.src = url;
        this.$img.style.display = 'block';
        this.setState({});
    };
    //改变星星,分类
    select = (index) => {
        console.dir(this.$i);
        this.setState({index});
        this.$i.style.backgroundImage = index === 'S' ? 'url(http://img.hb.aicdn.com/4176b4a923d07170d09f1759d5a80f1f62e7fce5355-obwisX_fw658)' : 'url(http://m.bakelulu.com/images/count_icon.png)';
    };

    render() {
        return (
            <div className="works">
                <Header>
                    {
                        <div className="works-header">
                            <Link className="works-left" to="/"><i> </i></Link>
                            <span className="works-title">新建方子</span>
                            <Link className="works-right" to="/">发布</Link>
                        </div>
                    }
                </Header>
                <div className="works-body">
                    <span className="works-body-title">名称:</span>
                    <input ref={input => this.$title = input} type="text" className="works-body-time"
                           placeholder="28个字符以内"/>
                    <div className="works-body-cover">
                        <span>封面:</span>
                        <div className="works-body-input">
                            <img ref={img => this.$img = img}
                                 src="" alt=""
                                 id="works-img"/>
                            <i> </i>
                            <input onChange={this.handleClick} type="file" ref={input => this.$file = input}/>
                        </div>
                        <p></p>
                    </div>
                    <div className="works-body-diff">
                        <p>难度:</p>
                        <div onClick={e => {
                        }} className="works-body-star">
                            {[1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <i key={index} onClick={e => {
                                        this.setState({star: item})
                                    }} className={item <= this.state.star ? 'level' : ''}> </i>
                                )
                            })}
                            <p>{'烤菜'}</p>
                        </div>
                    </div>
                    <div className="works-body-class">
                        <div className="works-body-class1">分类及份量:</div>
                        <div className="works-body-class2">
                            <span>{'烤箱菜'}</span>
                        </div>
                        <div className="works-body-class3">
                            <div className="tabs-header">
                                <a onClick={() => this.select('S')}
                                   className={this.state.index === 'S' ? 'coursePack course active' : 'coursePack course'}><span>按人份</span></a>
                                <a onClick={() => this.select('K')}
                                   className={this.state.index === 'K' ? 'coursePack pack active' : 'coursePack pack'}><span>按个数</span></a>
                            </div>
                        </div>
                        <div className="works-body-class4">
                            <i ref={i => this.$i = i}> </i><span>{`x${this.state.part}${this.state.index === 'S' ? '人份' : '个'}`}</span>
                            <div>
                                <div onClick={() => {
                                    this.setState({part: --this.state.part})
                                }} className='works-body-left'>-
                                </div>
                                <div onClick={() => {
                                    console.log(this.state.part);
                                    this.setState({part: ++this.state.part})
                                }} className='works-body-right'>+
                                </div>
                            </div>
                        </div>
                        <div className="works-body-class5"> </div>
                    </div>
                    <div className="works-add"> </div>
                    <div className="works-abs">
                        <span>方子摘要:</span>
                        <textarea ref={textarea=>this.$text=textarea} placeholder="对这个方子有什么想介绍或者想补充的吗">{null}</textarea>
                        <div></div>
                    </div>
                    <div className="works-footer">
                        <div className="works-footer1">
                            <span>添加标签</span>
                            <i>原创></i>
                        </div>
                        <div className="works-footer2">
                            <span>设置权限</span>
                            <i>我要上首页></i>
                        </div>
                        <div className="works-footer3">
                            <span>同步到</span>
                            <i> </i>
                            <div></div>
                        </div>
                        <div id="works-button">
                            <div onClick={this.handleSubmit}>提交</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import './works.less';
