import React from 'react';
import styles from './signIn.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn(){
    return(
        <Form className={styles.formContainer}>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
            Forgot password?
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
    )
}

export default SignIn;