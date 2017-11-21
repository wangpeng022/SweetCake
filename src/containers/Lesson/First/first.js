import React, {Component} from 'react';
import './first.less'
export default class First extends Component {
    componentDidMount() {
        if (!this.props.location.state) {
            this.props.history.push('/pack')
        }
    }
    render() {
        console.log(this.props);
        console.log(this.props.location.state);
        let {id, url, bigTitle, lessonNum} = this.props.location.state || {};
        return (
            <div>
                <p>{id}</p>
                <img src={url} alt=""/>
            </div>
        )
    }

}
