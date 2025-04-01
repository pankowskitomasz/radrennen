import {Button,Card,Col,Container,Form,Row } from "react-bootstrap";
import { Link } from "react-router";

function RestorePasswordView(){
    return(
        <Container className="bg-dark mh-100vh">
            <Row>
                <Col xs={12} sm={10} md={6} className="mh-100vh bg-secondary mx-auto d-flex">
                    <Row className="w-100 my-auto text-center mx-auto">
                        <Col xs={11} className="mx-auto">
                            <Card className="p-3 shadow">
                                <div className="mb-3">
                                    <h5 className="text-secondary text-uppercase">Restore Password</h5>
                                </div>
                                <Form className="text-start">
                                    <Form.Label className="ms-2">Your email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" className="mb-3 rounded-pill"/>
                                    <Form.Text className="mb-3 p-1">
                                        Enter your email address. If your email address exists in our database, then
                                        we will send on it link to restore your password.
                                    </Form.Text>
                                    <div className="text-center pt-3">
                                        <Button variant="secondary" className="rounded-pill me-3" type="submit">Send</Button>
                                        <Link className="btn btn-outline-secondary rounded-pill" to="/signin">Back</Link>
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

export default RestorePasswordView;