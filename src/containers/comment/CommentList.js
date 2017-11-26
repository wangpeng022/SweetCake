import React from 'react'
import Comment from "./Comment";

export default class CommentList extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        return (
            <ul className="list-group">
                {
                    this.props.comments.map((item, index) => (
                        <Comment id={this.props.id} key={index} commentId={index} comment={item} delComment={this.props.delComment}/>))
                }
            </ul>
        )

    }
}
