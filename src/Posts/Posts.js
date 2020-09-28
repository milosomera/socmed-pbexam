import React, { useContext } from "react";
import MyContext from "../MyContext";
import Post from "./Post";
import { Container, Col } from "react-bootstrap";

const Posts = () => {
    const {
        posts, 
        user, 
        deletePost
    } = useContext(MyContext);
    let allPosts = posts.map(post => {
        return(
            <Post
                key={post._id} 
                post={post} 
                user={user} 
                deletePost={deletePost}
            />
        )
    })
    return(
        <div id="all-post">
            <Col id="posts-container" lg={6}>
                <Container>
                    {allPosts}
                </Container>
            </Col>
        </div>
    )
}

export default Posts;