import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommentBox from "../Comments/CommentBox";
import { HandThumbsUp } from "react-bootstrap-icons";

const Post = (props) => {
    const {
        addComment, 
        user,
        likePost
    } = useContext(MyContext);
    const likePostHandler = () => {
        console.log(JSON.parse(localStorage.getItem("appUser"))._id);
        likePost(JSON.parse(localStorage.getItem("appUser"))._id, props.post._id);
    }
    return(
        <div id="post">
            <Row>
                <Col md={4} id="image-container">
                    <Image 
                        src={props.post.image} 
                        alt="Image goes here" 
                        thumbnail
                    />
                </Col>
                <Col id="post-body" md={8}>
                    <div id="button-div">
                        {
                            props.post.user.username === JSON.parse(localStorage.getItem("appUser")).username ?
                            <Button
                                variant="outline-danger" 
                                size="sm" 
                                id={props.post._id} 
                                onClick={props.deletePost}
                            >
                                x
                            </Button> : 
                            ""
                        }
                    </div>
                    <div>
                        <strong>{props.post.user.username}:</strong> {props.post.body.substring(0, 100)}
                    </div>
                    <hr/>
                    <div id="post-detail-link">
                        <Row>
                            <Col>
                                <Link to={"/posts/" + props.post._id}>
                                    read more
                                </Link>
                            </Col>
                            <Col id="comment-link">
                                <Link to={"/posts/" + props.post._id}>
                                    <span>Comments: ({props.post.comments.length})</span>
                                </Link>
                            </Col>
                            <Col id="like-btn">
                                <Button
                                    variant="light"
                                    size="sm"
                                    id={props.post._id}
                                    onClick={likePostHandler}
                                >
                                    <span><HandThumbsUp/></span>
                                </Button>
                                <span> {props.post.thumbsUp.length}</span>
                            </Col>
                        </Row>
                    </div>
                    <CommentBox
                        post={props.post} 
                        addComment={addComment} 
                        user={user}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Post;