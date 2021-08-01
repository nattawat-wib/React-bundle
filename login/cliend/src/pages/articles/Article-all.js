import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import ArticleCard from '../../components/Article-card'
import {Link} from 'react-router-dom';

const Home = () => {
    const article_card_list = [
        {
            link: '/',
            title: '1 Card Title Card Title Card Title',
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            date: '01/02/2020'
        },
        {
            link: '/',
            title: '2 Card Title Card Title Card Title',
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            date: '02/02/2020'
        },
        {
            link: '/',
            title: '3 Card Title Card Title Card Title',
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            date: '03/02/2020'
        },
        {
            link: '/',
            title: '4 Card Title Card Title Card Title',
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            date: '04/02/2020'
        },
        {
            link: '/',
            title: '4 Card Title Card Title Card Title',
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            date: '04/02/2020'
        },
    ]

    return (
        <main className="my-5">
            <Container className="">
                <header class="header d-flex justify-content-between">
                    <h3 className="mb-0"> All Article </h3>
                    <Link to="/article-add" className="btn btn-info text-light" > Add new article </Link>
                </header>
                <hr />

                <Row>
                    {
                        article_card_list.map(card => {
                            return (
                                <Col sm={6} md={4} lg={3} className="mb-4">
                                    <ArticleCard cardDetail={card}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </main>
    )
}

export default Home
