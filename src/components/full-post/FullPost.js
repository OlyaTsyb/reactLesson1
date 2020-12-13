import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
}from "react-router-dom";
import PostService from "../../services/postServices/PostService";
class FullPost extends Component {
    state = {post: null}
    postService = new PostService();

    async componentDidMount() {
        let {id} = this.props;
        let post = await this.postService.post(id);
        this.setState({post})

    }

    render() {
        let {post} = this.state;

        return (
            <div>
                {
                    post && <div>{post.id} {post.title}</div>
                }
            </div>
        );
    }
}

export default FullPost;