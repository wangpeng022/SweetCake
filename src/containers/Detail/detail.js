import React, {Component} from 'react';
import './detail.less'
import DetailHeader from "../../components/DetailHeader/detail-header.js";
import {Route, Link} from 'react-router-dom';
import actions from '../../store/actions/details'
import {connect} from 'react-redux'

let ary = [1, 2, 3, 4, 5];

class Detail extends Component {
    constructor() {
        super();
        this.state = {show: false}
    }

    componentDidMount() {
        console.log(this.props.match.params.index);
        this.props.fetchDetailLists(+this.props.match.params.index);
    }

    handleClick = (id) => {
        // console.log(id);
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.setState({
                show: !this.state.show
            });
            this.props.fetchUserCollect({id, user: user.id})
        } else {
            alert('请先登录');
        }


    };

    render() {
        console.log(this.props, 'xxxxxxx');
        let {id, message, dataCourse, dataCakeLIst, dataComment, dataTopic} = this.props;
        //console.log(dataCakeLIst);
        console.log(id);
        let num = Math.round(Math.random() * 4 + 1);
        return (
            <div className="detail-xq">
                <DetailHeader>
                    {
                        <div className="detail-header">
                            <div className="left">
                                <Link className="go_home" to="/home">首页</Link>
                            </div>
                            <div className="right">
                                <a href="javascript:;" className="love" onClick={() => this.handleClick(id)}><i
                                    className={this.state.show ? 'current' : ''}> </i></a>
                                <a className="share">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    }
                </DetailHeader>
                {
                    dataCakeLIst && dataComment.comment_list ? (
                        <div className="courseDiv">
                            {/*头部分*/}
                            <div className="arc_header">
                                <div className="pic">
                                    <img src={dataCourse.course_img}
                                         alt=""/>
                                </div>
                                <h2 className="fs_18">{dataCourse.course_title}</h2>
                                <div className="content">
                                    <div className="top">
                                        <div className="img">
                                            <img src="http://beile.bakelulu.com.cn/FluvAmpf-qsWdScxXCgTUzBaOwlr"
                                                 alt=""/>
                                        </div>
                                        <div className="text">
                                            <span>焙忘录</span>
                                            <p className="fs_14">烘焙是生活的俄一道光</p>
                                        </div>
                                    </div>
                                    <div className="middle">
                                        {dataCourse.course_info}
                                    </div>
                                    <div className="bottom">
                                        <div className="level">
                                            <ul className="current">
                                                {
                                                    ary.map((item, index) => (
                                                        <li className={index < num ? 'current' : ''} key={index}></li>
                                                    ))
                                                }
                                            </ul>
                                            <p>难度基于5分</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="arc_content">
                                <p>
                                    <span>{dataCakeLIst[0].cake_img_title01}</span>
                                </p>
                                <p>
                                    <span>{dataCakeLIst[1].cake_img_title02}</span>
                                </p>
                                <p className="child">
                        <span>
                        {dataCakeLIst[2].img1_title}
                            <img src={dataCakeLIst[2].cake_img1} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[3].img2_title}
                            <img src={dataCakeLIst[3].cake_img2} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[4].img3_title}
                            <img src={dataCakeLIst[4].cake_img3} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[5].img4_title}
                            <img src={dataCakeLIst[5].cake_img4} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[6].img5_title}
                            <img src={dataCakeLIst[6].cake_img5} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[7].img6_title}
                            <img src={dataCakeLIst[7].cake_img6} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[8].img7_title}
                            <img src={dataCakeLIst[8].cake_img7} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[9].cake_img_title03}
                        </span>
                                </p>
                                <p className="child">
                        <span>
                        {dataCakeLIst[10].imgA_title}
                            <img src={dataCakeLIst[10].cake_imgA} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[11].imgB_title}
                            <img src={dataCakeLIst[11].cake_imgB} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[12].imgC_title}
                            <img src={dataCakeLIst[12].cake_imgC} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[13].imgD_title}
                            <img src={dataCakeLIst[13].cake_imgD} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[14].imgE_title}
                            <img src={dataCakeLIst[14].cake_imgE} alt=""/>
                        </span>
                                </p>
                                <p className="child">
                        <span>
                    {dataCakeLIst[15].cake_img_title04}
                        </span>
                                </p>
                                <p className="child">
                        <span>
                        {dataCakeLIst[16].cake_img_title05}
                        </span>
                                </p>
                                <p className="child">
                                    <span></span>
                                </p>
                                <br/>
                            </div>
                            <div className="arc_end fs_14">
                                新技能get，快去练习一下吧～
                            </div>
                            <div className="arc_comment custom_frame">
                                <div className="content">
                                    <div className="title_frame">
                                        <h3>这个教程的评论</h3>
                                        <span>
                                    <a href="#">{dataComment.comment_count}条评论</a>
                                </span>
                                    </div>
                                    <div className="content_frame">
                                        <ul>
                                            <li>
                                                <div className="head_frame">
                                                    <div className="left">
                                                        <img src={dataComment.comment_list[0].head_icon} alt=""/>
                                                        <span>{dataComment.comment_list[0].nickname}</span>
                                                    </div>
                                                    <div className="right">
                                                        <div className="click_frame">
                                                            <i></i>
                                                            <span className="fs_12 count">0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="center_frame fs_14">
                                                    {dataComment.comment_list[0].comment}
                                                </div>
                                                <div className="bottom_frame fs_12">
                                                    {dataComment.comment_list[0].comment_time}
                                                    <span>·</span>
                                                    <a href="#">举报</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="#" className="write">
                                   <span>
                                       <i></i>
                                       写评论
                                   </span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="arc_course">
                                <div className="title">
                                    <div className="border"></div>
                                    <span className="fs_18">相关教程</span>
                                </div>
                                <div className="content">
                                    <div className="pic">
                                        <img src={dataTopic.topic_img} alt=""/>
                                    </div>
                                    <div className="text">
                                        <div className="msg">
                                            <h3>{dataTopic.topic_title}</h3>
                                            <p className="fs_12">共{dataTopic.course_count}个课程</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </div>
        )
    }
}

export default connect(state => state.detail, actions)(Detail)

