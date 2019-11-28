import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap'

export default class CreateUser extends React.Component {
    newUser = (e) => {
        var name = e.target.name.value
        var username = e.target.username.value
        var password = e.target.password.value
        var role = e.target.role.value
        var userD = JSON.stringify({
            name: name,
            username: username,
            password: password,
            role: role
        })

        fetch(`http://localhost:6400/createuser`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:userD
        })
        e.preventDefault();
        this.props.history.push('/login')
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
                <center><h2 style={{ color: 'grey' }}>Create User</h2></center>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <Form style={{ position: 'relative', left: '170px' }} onSubmit={this.newUser}>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label style={{ color: 'grey' }}>Name:</Form.Label>
                                    <Form.Control name="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label style={{ color: 'grey' }}>Username:</Form.Label>
                                    <Form.Control name="username" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ color: 'grey' }}>Password:</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>
                                <div className="col-lg-4" style={{position:'relative', left:'-15px'}}>
                                <Form.Control as="select" name='role'>
                                    <option>Select Role</option>
                                    <option value='Admin'>Admin</option>
                                    <option value='User'>User</option>
                                </Form.Control>
                                </div>
                                <br/>
                                <center>
                                    <Button variant="info" type="submit">
                                        Submit
                                     </Button>
                                </center>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
