import React from "react";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarBS extends React.Component {
    render() {
        return(
            <div id="navbar">
                <Navbar bg="success" expand="lg" variant="dark" fixed="top">
                    <NavbarBrand>Welcome to SocMed, {this.props.user.username}</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/socmed-pbexam" className="nav-item">
                                View Posts
                            </Link>
                            <Link to="/create-post" className="nav-item">
                                Create Post
                            </Link>
                        </Nav>
                        <Nav id="sign-out" className="ml-auto">
                            <Link to="/socmed-pbexam" onClick={this.props.logout}>
                                Sign Out
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarBS;