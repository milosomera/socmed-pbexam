import React from "react";
import MyContext from "./MyContext";
import axios from "axios";

class MyProvider extends React.Component {

    userCredential = (email, password) => {
        axios.post("http://localhost:8080/users/login", {
            email: email,
            password: password
        })
        .then(res => {
            if(res.data.error) {
                alert("Invalid email/password");
            } else {
                localStorage.setItem("appUser", JSON.stringify(res.data));
                this.setState({
                    user: res.data,
                    isLoggedin: true
                })
            }
        })
    }

    logout = () => {
        localStorage.removeItem("appUser");
        this.setState({
            isLoggedin: false
        })
    }

    addPost = (post) => {
        axios.post("http://localhost:8080/posts", {
            post: post
        })
        .then(res => {
            let newPost = [res.data, ...this.state.posts];
            this.setState({
                posts: newPost
            })
        })
    }

    deletePost = (e) => {
        let allPosts = [...this.state.posts];
        allPosts.map(post => {
            if(e.target.id === post._id) {
                allPosts.splice(allPosts.indexOf(post), 1);
            }
            return allPosts;
        })
        this.setState({
            posts: allPosts
        })
        axios.delete("http://localhost:8080/posts/" + e.target.id)
    }

    addComment = (comment, postId) => {
        axios.post("http://localhost:8080/comments", {
            comment: comment
        })
        .then(() => {
            let postComments = [...this.state.posts];
            postComments.map(post => {
                if(post._id === postId) {
                    post.comments.push(comment);
                }
                return post;
            })
            this.setState({
                posts: postComments
            })
        })
    }

    state = {
        isLoggedin: localStorage.getItem("appUser") ? true : false,
        user: localStorage.getItem("appUser") ? JSON.parse(localStorage.getItem("appUser")) : {},
        posts: [],
        userCredential: this.userCredential,
        logout: this.logout,
        addPost: this.addPost,
        deletePost: this.deletePost,
        addComment: this.addComment
    }

    componentDidMount() {
        axios("http://localhost:8080/posts")
        .then(res => {
            let posts = res.data;
            this.setState({
                posts: posts
            })
        })
    }

    render() {
        
        return(
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )

    }

}

export default MyProvider;