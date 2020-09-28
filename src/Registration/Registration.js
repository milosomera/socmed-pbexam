import React from "react";
import axios from "axios";
import { Form, Row, Col, FormControl, FormGroup, Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Registration extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    errorHandler = () => {
        if(this.state.username === "") {
            this.setState({
                usernameError: "This field is required"
            })
        } else {
            this.setState({
                usernameError: ""
            })
        }
        if(this.state.email === "") {
            this.setState({
                emailError: "This field is required"
            })
        } else {
            this.setState({
                emailError: ""
            })
        }
        if(this.state.password === "") {
            this.setState({
                passwordError: "This field is required"
            })
        } else {
            this.setState({
                passwordError: ""
            })
        }
        if(this.state.confirmPassword !== this.state.password) {
            this.setState({
                confirmPasswordError: "Password didn't match"
            })
        } else {
            this.setState({
                confirmPasswordError: ""
            })
        }
    }
    register = () => {
        this.errorHandler();
        if((this.state.username !== "") 
            && (this.state.email !== "") 
            && (this.state.password !== "") 
            && (this.state.password === this.state.confirmPassword)
        ) {
            axios.post("https://socmed-pbexam.herokuapp.com/users/users/register", {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
            .then(() => {
                this.props.userCredential(this.state.email, this.state.password);
                this.setState({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            })
        }
    }
    render() {
        return(
            <div id="registration">
                <Container>
                    <Jumbotron>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <FormControl 
                                            type="text" 
                                            placeholder="Username" 
                                            name="username" 
                                            value={this.state.username} 
                                            onChange={this.inputChangeHandler}
                                        />
                                        <div className="error-msg">
                                            <small>{this.state.usernameError}</small>
                                        </div>
                                    </Col>
                                    <Col>
                                        <FormControl 
                                            type="email" 
                                            placeholder="Email" 
                                            name="email" 
                                            value={this.state.email} 
                                            onChange={this.inputChangeHandler}
                                        />
                                        <div className="error-msg">
                                            <small>{this.state.emailError}</small>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <FormControl 
                                            type="password" 
                                            placeholder="Password" 
                                            name="password" 
                                            value={this.state.password} 
                                            onChange={this.inputChangeHandler}
                                        />
                                        <div className="error-msg">
                                            <small>{this.state.passwordError}</small>
                                        </div>
                                    </Col>
                                    <Col>
                                        <FormControl 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            name="confirmPassword" 
                                            value={this.state.confirmPassword} 
                                            onChange={this.inputChangeHandler}
                                        />
                                        <div className="error-msg">
                                            <small>{this.state.confirmPasswordError}</small>
                                        </div>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Link to="/">
                                <Button 
                                    className="reg-button" 
                                    variant="success" 
                                    onClick={this.register}
                                    block
                                >
                                    Register
                                </Button>
                            </Link>
                            <hr/>
                            <Link to="/">
                                <Button 
                                    className="reg-button" 
                                    variant="info" 
                                    block
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <p className="sign-in">Registered already? Click <span>"Sign In"</span>.</p>
                        </Form>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default Registration;