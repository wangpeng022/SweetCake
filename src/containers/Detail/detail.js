import React,{Component} from 'react';
import './detail.less'
export default class Detail extends Component{
    render(){
        console.log(this.props.location.state);
        return (
            <div>
                detail
            </div>
        )
    }
}

