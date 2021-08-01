import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

const Home = () => {
    return (
        <main className="mt-5">
            <Container className="">
                <header class="header d-flex justify-content-end">
                    <Button className="btn btn-info text-light fw-bold">

                        <span> Add new Article </span>
                    </Button>
                </header>
                <hr />
            </Container>
        </main>
    )
}

export default Home
