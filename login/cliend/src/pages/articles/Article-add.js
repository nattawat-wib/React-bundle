import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import axios from 'axios'

const ArticleAdd = () => {
    const [tileInput, setTileInput] = useState('')
    const [descInput, setDescInput] = useState('')

    const handleTitleInput = (e) => setTileInput(e.target.value);
    const handleDescInput = (e) => setDescInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(tileInput, descInput)

        axios({
            method: 'post',
            url: 'http://localhost:8000/article',
            data: {
                title: tileInput,
                desc: descInput
            }
        })

        alert('post success')
        setTileInput('')
        setDescInput('')
    }

    return (
        <Container className="my-5">
            <h1 className="text-center"> Create new article </h1>
            <Form autoComplete="off" onSubmit={handleSubmit} >
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
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        create post
                    </Button>
                    <Link to="/article" className="btn btn-outline-danger ms-2"> BACK </Link>
                </div>
            </Form>
        </Container>
    )
}

export default ArticleAdd
