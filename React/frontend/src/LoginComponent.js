import React from 'react';
import { Button, Form, Navbar, } from 'react-bootstrap'
export default class Login extends React.Component {

    Login = (e) => {
    var username = e.target.username.value
    var password = e.target.password.value
    var userD = JSON.stringify({
    username: username,
    password: password
    })
    fetch(`http://localhost:6400/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:userD
        })
        .then(response => response.json(), (error) => console.log(error))
            .then(data => {
                sessionStorage.setItem('role', `${data[0].role}`);
                if (sessionStorage.getItem('role')=='Admin'||sessionStorage.getItem('role')=='User') {
                    this.props.history.push('/showrecords')
                }
                else{alert("Can't grab role")}
            })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" className="mr-auto"><img
                        src="logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Form inline>
                        <Button style={{ marginRight: "5px" }} variant="outline-info" href="/createuser">Create User</Button>
                        <Button variant="outline-info" href="/login">Login</Button>
                    </Form>
                </Navbar>
                <center><h2 style={{ color: 'grey', fontSizeAdjust: '30' }}>Login</h2></center>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Form style={{ position: 'relative', left: '170px' }} onSubmit={this.Login}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'grey' }}>Username</Form.Label>
                                    <Form.Control type="username" name="username" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ color: 'grey' }}>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                    <Form.Text className="text-muted">
                                        Do not share your password with anyone.
                                     </Form.Text>
                                </Form.Group>
                                <center>
                                    <Button variant="info" type="submit">
                                        Submit
                                    </Button>
                                </center>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
