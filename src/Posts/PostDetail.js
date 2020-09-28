import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const PostDetail = (props) => {
    let postComments = props.post.comments.map(comment => {
        return(
            <div key={comment._id} className="comment-body">
                    <strong>{comment.user}: </strong> {comment.body}<br/>
            </div>
        )
    })
    return(
        <div id="post-detail">
            <Col id="post-detail-container" lg={6}>
                <Container>
                    <Row>
                        <Image
                            src={props.post.image} 
                            alt="Image goes here"
                            thumbnail  
                            fluid
                        />
                    </Row>
                    <Row className="post-body-detail">
                        <div>
                            <strong>{props.post.user.username}:</strong> {props.post.body}
                        </div>
                    </Row>
                    {
                        props.post.comments.length > 0 ?
                        <Row>
                            <div id="comment-header"><strong>Comments:</strong></div>
                        </Row> :
                        ""
                    }
                    <Row>
                        {postComments}
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default PostDetail;