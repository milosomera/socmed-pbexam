import React from "react";
import { Form, FormGroup, FormControl, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class CommentBox extends React.Component {
    state = {
        comment: ""
    }
    getComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    addCommentHandler = () => {
        let newComment = {
            body: this.state.comment,
            user: this.props.user.username,
            post: this.props.post._id
        }
        if(this.state.comment === "") {
            alert("This field can't be blank");
        } else {
            this.props.addComment(newComment, this.props.post._id);
        }
    }
    render() {
        return(
            <div id="comment-box">
                <Form>
                    <Row>
                        <Col md={9}>
                            <FormGroup>
                                <FormControl
                                    as="textarea" 
                                    rows="1" 
                                    placeholder="Comment here" 
                                    onChange={this.getComment}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <Button
                                id="comment-button"
                                variant="success" 
                                size="sm" 
                                onClick={this.addCommentHandler}
                            >
                                {
                                    this.state.comment !== "" 
                                    ? <Link to={"/socmed-pbexam/posts/" + this.props.post._id}>Comment</Link>
                                    : "Comment"
                                }
                                
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default CommentBox;