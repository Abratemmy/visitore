import React,{useState} from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./signup.css";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(){

    }
  return (
    <Container>
        <Row>
            <Col md={6} className="auth_form_container">
                <Form style={{width:"100%"}} onSubmit={handleSubmit}>
                    <h1>Create an account</h1>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className='mb-3'>    
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Button type="submit">Signup</Button>
                    </Form.Group>
                    <p className='pt-3 text-center'>Already have an account? <Link to="/login">Login</Link> </p>
                </Form>
            </Col>

            <Col md={6} className="auth_image_container"></Col>
        </Row>
    </Container>
  )
}

export default Signup