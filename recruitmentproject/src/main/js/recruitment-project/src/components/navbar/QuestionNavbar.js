import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import SignupButton from '../SignupButton/SignupButton';

function QuestionNavbar() {

    return (
        <Navbar className="bg-body-tertiary" stickuy="top">
            <Container fluid>
                <Col className="float-start">
                    <Navbar.Brand>Questions</Navbar.Brand>
                </Col>
                <Col className="d-flex gap-2 float-end" md="auto">
                    <Button>Login</Button>
                    <SignupButton />
                </Col>
            </Container>
        </Navbar >
    )
}

export default QuestionNavbar;