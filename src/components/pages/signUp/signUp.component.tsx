import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './signUp.module.css';

function SignUp(){
    return(
        <Form className={styles.formContainer}>
            <h2>Registration</h2>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="By creating an account, you agree to Rentops 
            Terms and Conditions and Privacy Policy.* " />
            </Form.Group>
            <Button variant="primary" size="lg" block>
            Sign Up
            </Button>

            <hr/>

            <p>Already registered? Login Here</p>
        </Form>
    )
};

export default SignUp;