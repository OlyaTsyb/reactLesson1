import React, {Component} from "react";
import Post from "../post/Post";
import {PostsServices} from "../services/PostsServices";



class AllPosts extends Component {
    state = {posts :[],chose : null};
    postsService = new PostsServices()


    selectPost = (id) =>{
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chose : find})

    }
    async componentDidMount(){
    await this.postsService.posts().then(posts => {
        this.setState({posts})
    })
    }
     render(){
         let {posts,chose} = this.state;
         return(
            <div>
                {
                    posts.map(post => <Post item = {post} key = {post.id} selectPost = {this.selectPost}/>)
                }
                {
                    chose && <h2>{chose.id} - {chose.title} </h2>
                }

            </div>
         )
     }

}

export default AllPosts;