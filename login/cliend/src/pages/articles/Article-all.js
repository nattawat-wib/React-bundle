import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import ArticleCard from '../../components/Article-card'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [articleList, setArticleList] = useState([]);
    
    useEffect(async () => {
        axios.get('http://localhost:8000/')
             .then(resp => {
                setArticleList(resp.data)
             })
    }, [])

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
                        articleList.map(card => {
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
