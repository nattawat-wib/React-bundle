import React, { useState } from 'react'
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MainNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" className="text-decoration-none fw-bold text-info">
                            React-Bootstrap
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-decoration-none">
                            <Nav.Link>
                                <Link to="/" className="text-decoration-none fw-bold text-light"> Home </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about" className="text-decoration-none fw-bold text-light"> About </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/article" className="text-decoration-none fw-bold text-light"> Article </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/register" className="text-decoration-none fw-bold text-light"> Register </Link>
                            </Nav.Link>
                            <Button variant="outline-info" className="fw-bold" onClick={handleShow}> Login </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title> Login </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <from>
                        <label> email </label>
                        <input class="from-control"/>
                        <label> password </label>
                        <input class="from-control"/>
                    </from>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MainNavbar
