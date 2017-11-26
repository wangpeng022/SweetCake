import React from 'react'

export default class CommentList extends React.Component{
    render(){
        console.log(this.props.comment);
        let {id,username,content,createAt}=this.props.comment;
        localStorage.setItem('userComment',JSON.stringify(this.props.comment));
        let comment=localStorage.getItem('userComment');
        let getUserComment=JSON.parse(comment);
        console.log(getUserComment);
        return(
            <li className="list-group-item" style={{width:'100%',height:'.75rem'}}>
                {id}:{content} <button onClick={()=>this.props.delComment(id)} className="btn btn-danger" style={{padding:'0 0'}}>删除</button><span className="pull-right">{createAt.toLocaleString()}</span>
            </li>
        )

    }
}

