import React, {Component} from 'react';
import './first.less'
export default class First extends Component {
    constructor(){
        super();
        this.state={show:false}
    }
    handleClick=()=>{
      this.setState({
          show:!this.state.show
      })
    };
    render() {
        //console.log(this.props);
        //console.log(this.props.lessons);
        return (
                <ul className="big-frame">
                    {
                        this.props.lessons.map((item,index)=>(
                            <li className="current" key={index}>
                                <div className="frame">
                                    <a href="javascript:;" onClick={this.handleClick}>
                                        <img src={item.url} alt=""/>
                                        <div className="title">{item.title}</div>
                                    </a>
                                    <div className={this.state.show?'sign current':'sign'} />
                                </div>
                            </li>
                        ))
                    }
                </ul>
        )
    }

}


