import React, { Fragment, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                                <Link to="/contact" className="text-decoration-none fw-bold text-light"> Contact </Link>
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
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
