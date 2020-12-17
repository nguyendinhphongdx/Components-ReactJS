
import logo from './logo192.png'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

function Login(){
    return (
            <Container id="container-login" >
                <Row id="row-login">
                    <Col md="4" id="col-login">
                        <div className="title-login">
                            Member Login
                        </div>
                        <div className="picture-login">
                            <img src={logo} alt=""/>
                        </div>
                    </Col>
                    <Col id="col-info">
                        <div className="title-login">
                           ĐĂNG NHẬP
                        </div>
                        <Form className="form-login" onSubmit={submit}>
                            <Form.Group controlId="formBasicEmail" className="group-login">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="group-login">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" className="group-login">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" className="group-login">
                                {/* <Button variant="primary" type="submit" onClick={()=>console.log('ấdassad')}>
                                    Submit
                                </Button> */}

                                <Button onClick={() => handleClick()}>
                                    hello
                                    </Button>
                            </Form.Group>
                           
                        </Form>
                    </Col>
                </Row>
            </Container>
    );
}
export default Login;
function submit(){
    return false;
}
function goHome() {
    console.log('aaaa');
    
    <Redirect to="/home"/>
}
function handleClick () {
    window.location = "/home";
    <Redirect to="/home"/>
  }