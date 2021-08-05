import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ArticleCard = (props) => {
    const handleDelete = () => {
        console.log('pass herer')
        axios.delete(`http://localhost:8000/article/${props.cardDetail.title}`)

        window.location.reload();
    }

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title className="text-truncate"> {props.cardDetail.title} </Card.Title>
                <Card.Text> {props.cardDetail.desc} </Card.Text>
                <section> {props.cardDetail.date} </section>
                <Link to={`/article-detail/${props.cardDetail.title}`} className="btn btn-sm text-light btn-info" > Read more </Link>
                <Button variant="danger" className="mx-2" size="sm" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} className="me-1" />
                    Delete
                </Button>
                <Link to={`/article-edit/${props.cardDetail.title}`} className="btn btn-sm text-light btn-success" > 
                    <FontAwesomeIcon icon={faEdit} className="me-1" />
                    Edit
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;