import React from "react";
import { Container, Col, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class CreatePost extends React.Component {
    state = {
        newPost: "",
        newImage: ""
    }
    getPost = (e) => {
        let newPost = e.target.value;
        this.setState({
            newPost: newPost
        })
    }
    getImage = (e) => {
        this.setState({
            newImage: e.target.value
        })
    }
    addPostHandler = () => {
        let newPost = {
            user: this.props.user._id,
            body: this.state.newPost,
            image: this.state.newImage
        }
        this.props.addPost(newPost);
    }
    render() {
        return(
            <div id="create-post">
                <Col id="create-post-container" lg={6}>
                    <Container>
                        <Form>
                            <FormGroup>
                                <FormControl 
                                    as="textarea" 
                                    rows="3" 
                                    placeholder="Type your post here." 
                                    onChange={this.getPost}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    type="text" 
                                    placeholder="Image URL" 
                                    onChange={this.getImage}
                                />
                            </FormGroup>
                            <Col id="submit-post" lg={1} xs={1}>
                                <Button 
                                    variant="success" 
                                    onClick={this.addPostHandler}
                                >
                                    <Link to="/socmed-pbexam">Post</Link>
                                </Button>
                            </Col>
                        </Form>
                    </Container>
                </Col>
            </div>
        )
    }
}

export default CreatePost;