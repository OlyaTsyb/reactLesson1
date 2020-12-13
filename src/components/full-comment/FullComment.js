import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
}from "react-router-dom";
import CommentService from "../../services/commentServices/commentService";
class FullComment extends Component {
    state = {comment :[]};
    commentServices = new CommentService();
    async componentDidMount() {
        let {id} = this.props;
        let comment = await this.commentServices.comment(id);
        this.setState({comment})
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {comment && <div> {comment.id} {comment.name}</div>}
            </div>
        );
    }
}

export default FullComment;