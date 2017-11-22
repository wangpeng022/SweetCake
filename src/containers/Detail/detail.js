import React, {Component} from 'react';
import './detail.less'
import DetailHeader from "../../components/DetailHeader/detail-header.js";
import {Link} from 'react-router-dom';
export default class Detail extends Component {
    render() {
        //console.log(this.props);
        return (
            <div className="detail-xq">
                <DetailHeader>
                    {
                        <div className="detail-header">
                            <div className="left">
                                <Link className="go_home" to="/home">首页</Link>
                            </div>
                            <div className="right">
                                <a href="javascript:;" className="love"><i className="current"></i></a>
                                <Link className="share" to="/share"><span></span></Link>
                            </div>
                        </div>
                    }
                </DetailHeader>
                <div className="courseDiv">
                    {/*头部分*/}
                    <div className="arc_header">
                        <div className="pic">
                            <img src="http://beile.bakelulu.com.cn/course/56456190d9ae450db7179eb6062c0518_temp.jpg"
                                 alt=""/>
                        </div>
                        <h2 className="fs_18">派皮制作与入模小技巧</h2>
                        <div className="content">
                            <div className="top">
                                <div className="img">
                                    <img src="http://beile.bakelulu.com.cn/FluvAmpf-qsWdScxXCgTUzBaOwlr" alt=""/>
                                </div>
                                <div className="text">
                                    <span>焙忘录</span>
                                    <p className="fs_14">烘焙是生活的俄一道光</p>
                                </div>
                            </div>
                            <div className="middle">
                                详细解答了派皮的制作与入模小技巧，如果还有疑问，欢迎来微博提问哟！@焙忘录的主页君
                            </div>
                            <div className="bottom">
                                <div className="level">
                                    <ul className="current">
                                        <li className="current"></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <p>难度基于5分</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="arc_content">
                        <p>
                            <span>派皮是烘焙中很常用的一个单品，制作简单保存方便，不同的填馅就能带来变化丰富的口味，实用度非常高!</span>
                        </p>
                        <p>
                            <span>接下来就说说派皮的详细做法（本篇仅做步骤和做法的分享，具体的分量大家要参照自己的配方进行）：</span>
                        </p>
                        <p className="child">
                            <span>
                                1、把砂糖和盐加入低粉，搅拌均匀。然后加入黄油块，用面粉裹住；
                                <img src="http://beile.bakelulu.com.cn/ueditor/d9866b9eabc941229797ce1ee1f0d0c7.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                2、用手快速将黄油一个个捏扁，用面粉裹住（这一步非常解压，我很喜欢）。注意不需要搓得非常细碎，可以保留一些片状黄油；
                                <img src="http://beile.bakelulu.com.cn/ueditor/65c83043e6d24b12a3a3b6f806a5f134.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                               3、加入冰水，用刮板切拌至基本成团；
                                <img src="http://beile.bakelulu.com.cn/ueditor/eb3ce609539040959dc8ec1bd225da5a.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                4、将碎面块聚到一起。然后用手掌将面团压平推开、再折叠成团，重复一两次，直至没有散开的面块。这一步是为了让面团中较大块的黄油抻拉为比较薄的片状。注意一旦成团就停止，不要过度揉面，以免形成太强的面筋；
                                <img src="http://beile.bakelulu.com.cn/ueditor/246e07e76b7b419c8e32e1561e66df9a.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                5、和好的面团用保鲜膜包紧后，用擀面杖压平擀薄。保证面团挤压到保鲜膜的每一个角落，不留任何干碎的面块。冷藏松弛至少15分钟；
                                <img src="http://beile.bakelulu.com.cn/ueditor/68b08e1d1c27484fa6a59b14cf5bbecd.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                6、做好的派皮有些会装入到活底模中使用，如图中这样：
                                <img src="http://beile.bakelulu.com.cn/ueditor/3c02f8d2492048b28869d77d69377f67.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                但更多的，是装进常用的派盘中使用。
                                <img src="http://beile.bakelulu.com.cn/ueditor/541edc7938014060976ffb45699af91a.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                想要把派皮完整、漂亮的装入到派盘中，也需要一些小技巧：
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                1、将冷藏松弛好的派皮面团拿出来，稍微回温变软，用擀面杖擀平成大于派盘的尺寸。
                                <img src="http://beile.bakelulu.com.cn/ueditor/9d60384c987948318376f38a8847ee4c.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                2、用擀面杖将派皮慢慢卷起，再将卷着派皮的擀面杖放在派盘上方，接着一边卷动擀面杖，一边把派皮慢慢转出来盖在派盘上；
                                <img src="http://beile.bakelulu.com.cn/ueditor/82871908fb5e429eb2ab1ab25d8fd5d5.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                拿一块边缘多出来的派皮捏成小团，把派皮沿着模具边缘轻轻按下，整形；
                                <img src="http://beile.bakelulu.com.cn/ueditor/077c05d30b8a47bd9fd244cd8dc95b0d.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                再借助擀面杖在派盘顶部压过，去掉多余的派皮；
                                <img src="http://beile.bakelulu.com.cn/ueditor/eb06e609fa0443ada4e6d0005cc22017.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                最后用叉子戳孔。
                                <img src="http://beile.bakelulu.com.cn/ueditor/aab02d76f3fb46de9a982359add17448.png" alt=""/>
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                最后装入填馅。如果填馅制作时间长，记得把派皮连同派盘放回冰箱冷藏；如果填馅已经准备好，可以直接装入派皮中，或预烤派皮后再装填馅。
                            </span>
                        </p>
                        <p className="child">
                            <span>
                                派皮还是挺皮实的一个单品，操作起来也并不复杂，赶快试试吧！
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
                                    <a href="#">1条评论</a>
                                </span>
                            </div>
                            <div className="content_frame">
                                <ul>
                                    <li>
                                        <div className="head_frame">
                                            <div className="left">
                                                <img src="http://wx.qlogo.cn/mmhead/50HcP4UOeLU8Mqk3A4y07VYs8MUl3NibunQfI3tyCRKGYoyKExcwO0w/0" alt=""/>
                                                <span>北冥有鱼，其名为姗。</span>
                                            </div>
                                            <div className="right">
                                                <div className="click_frame">
                                                    <i></i>
                                                    <span className="fs_12 count">0</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="center_frame fs_14">
                                            派皮也可用于蛋挞皮么
                                        </div>
                                        <div className="bottom_frame fs_12">
                                            2017-07-17
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
                                <img src="http://beile.bakelulu.com.cn/recipe/306fe0cf3aa447658ee9413ce527eb03_temp.jpg" alt=""/>
                            </div>
                            <div className="text">
                                <div className="msg">
                                    <h3>一键掌握空气戚风</h3>
                                    <p className="fs_12">共7个课程</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


