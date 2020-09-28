import React from "react";
import { Jumbotron, Container, Row, Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    errorHandler = () => {
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
    }
    login = () => {
        this.errorHandler();
        if(this.state.email !== "" && this.state.password !== "") {
            this.props.userCredential(this.state.email, this.state.password);
        }
    }
    render() {
        return(
            <div id="home">
                <Container>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col>
                                    <h1>SocMed</h1>
                                    <p className="text">Broaden your perspective with different opinions on SocMed.</p>
                                </Col>
                                <Col id="home-form">
                                    <Form>
                                        <FormGroup>
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
                                        </FormGroup>
                                        <FormGroup>
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
                                        </FormGroup>
                                        <Button 
                                            variant="success" 
                                            onClick={this.login} 
                                            block
                                        >
                                            Log In
                                        </Button>
                                        <hr/>
                                        <Link to="/registration">
                                            <Button variant="info" block>Sign Up </Button>
                                        </Link>
                                        <p className="sign-up">Not yet registered? Click <span>"Sign Up"</span>.</p>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default Home;