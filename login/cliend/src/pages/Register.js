import React from 'react'
import {Form, Button, Container} from 'react-bootstrap' 
import axios from 'axios'

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const registerData = {
            email: document.querySelector('[name="email"]').value,
            password: document.querySelector('[name="password"]').value,
            passwordConfirm: document.querySelector('[name="passwordConfirm"]').value
        }

        console.log(registerData)

        await axios.post('http://localhost:8000/user/register', registerData)
    }

    return (
        <Container className="mt-5">
            <Form autoComplete="off" onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="text" placeholder="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> password </Form.Label>
                    <Form.Control type="text" placeholder="password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label> passwordConfirm </Form.Label>
                    <Form.Control type="text" placeholder="passwordConfirm" name="passwordConfirm" />
                </Form.Group>
                <Button type="submit"> Register </Button>
            </Form>
        </Container>
    )
}

export default Register
