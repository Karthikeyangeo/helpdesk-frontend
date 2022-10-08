import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function HelpForm() {
  return (
    <>
        <div className='wrapper-title mt-3'>
            <h1>Help Desk</h1>
            <p>We hear what you say..! and Do what you think</p>
        </div>
        <div className='wrapper-main mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<sup>*</sup></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Type<sup>*</sup></Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option  disabled>Select the type issue</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Title<sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="Enter your issue title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <FloatingLabel controlId="floatingTextarea2" label="Issue Description">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>
                
                <div className='mt-3' style={{'textAlign':'center'}}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
                <Form.Group>
                    <Form.Text className="text-muted">
                            <sup>*</sup>We'll never share your personal info with anyone else.
                        </Form.Text>
                    </Form.Group>
            </Form>
        </div>
        
    </>
  )
}
