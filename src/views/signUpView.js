import {Container,Col,Row,Form,Button,Card } from "react-bootstrap";
import { Link } from "react-router";

function SignUpView(){
    return(
        <Container className="bg-dark mh-100vh">
            <Row>
                <Col xs={12} sm={10} md={6} className="mh-100vh bg-secondary mx-auto d-flex">
                    <Row className="w-100 my-auto text-center mx-auto">
                        <Col xs={11} className="mx-auto">
                            <Card className="p-3 shadow">
                                <div className="mb-3">
                                    <h5 className="text-secondary text-uppercase">Sign Up</h5>
                                </div>
                                <Form className="text-start">
                                    <Form.Label className="ms-2">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" className="mb-3 rounded-pill"/>
                                    <Form.Label className="ms-2">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" className="mb-3 rounded-pill"/>
                                    <Form.Label className="ms-2">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" className="mb-3 rounded-pill"/>
                                    <Form.Label className="ms-2">Password (repeat)</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" className="mb-3 rounded-pill"/>
                                    <div className="text-center">
                                        <Button variant="secondary" className="rounded-pill me-3" type="submit">Sign up</Button>
                                        <Link className="btn btn-outline-secondary rounded-pill" to="/">Back</Link>
                                    </div>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpView;