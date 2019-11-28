import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap'
export default class Home extends React.Component {
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
            <div style={{position:'relative', top:'130px'}}>
                <center>
                    <h1><a style={{color:'grey'}} href='/createuser'>Create User</a></h1>
                    <div style={{maxWidth:"40vw", backgroundColor:'white'}}>
                    <hr/>
                    </div>
                    <h1><a style={{color:'grey'}} href='/login'>Login</a></h1>
                </center>
            </div>
            </div>
            
        )
    }
}