import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ArticleEdit = () => {
    const [tileInput, setTileInput] = useState('')
    const [descInput, setDescInput] = useState('')

    const {title} = useParams();

    const handleTitleInput = (e) => setTileInput(e.target.value);
    const handleDescInput = (e) => setDescInput(e.target.value);

    useEffect( async () => {
        let data =  await axios.get(`http://localhost:8000/article/${title}`).then(resp => resp.data)
        setTileInput(data.title)
        setDescInput(data.desc)
    }, [])

    const handleEdit = (e) => {
        e.preventDefault();

        const editedArticle = {
            title: tileInput,
            desc: descInput
        };

        axios.patch(`http://localhost:8000/article/${title}`, editedArticle)
             .then(resp => console.log(resp))
             .catch(e => console.log(e));
    }

    return (
        <Container className="my-5">
            <h1 className="text-center"> Edit article </h1>
            <Form autoComplete="off" onSubmit={handleEdit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Title </Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={handleTitleInput} value={tileInput}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Description </Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleDescInput} value={descInput}/>
                </Form.Group>

                <div className="btn-wrapper d-flex justify-content-end">
                    <Button type="submit" variant="info" className="text-light d-block ms-auto">
                        <FontAwesomeIcon icon={faEdit} className="me-2" />
                        Edit
                    </Button>
                    <Link to="/article" className="btn btn-outline-danger ms-2"> BACK </Link>
                </div>
            </Form>
        </Container>
    )
}

export default ArticleEdit
