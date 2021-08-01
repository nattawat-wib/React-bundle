import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ArticleCard = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title className="text-truncate"> {props.cardDetail.title} </Card.Title>
                <Card.Text> {props.cardDetail.desc} </Card.Text>
                <section> {props.cardDetail.date} </section>
                <Link to="/article-detail" className="btn text-light btn-info mt-2" > Read more... </Link>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;