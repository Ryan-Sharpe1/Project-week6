import React from 'react';
import { Button, Form, Navbar } from 'react-bootstrap'

export default class AddPersonal extends React.Component {
    addPersonal = (e) => {
        var regno = e.target.regno.value
        var name = e.target.name.value
        var address = e.target.address.value
        var userD = JSON.stringify({
            regno: regno,
            name: name,
            address: address
        })

        fetch(`http://localhost:6400/addpersonal`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:userD
        })
        e.preventDefault();
        this.props.history.push('/showrecords')
        window.location.reload()

    }
    render() {
        

        return (
            <div>
            <center><h2 style={{ color: 'grey' }}>Create User</h2></center>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <Form style={{ position: 'relative', left: '170px' }} onSubmit={this.addPersonal}>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label style={{ color: 'grey' }}>RegNo:</Form.Label>
                                    <Form.Control name="regno" placeholder="RegNo" />
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label style={{ color: 'grey' }}>Name:</Form.Label>
                                    <Form.Control name="name" placeholder="Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ color: 'grey' }}>Address:</Form.Label>
                                    <Form.Control name="address" placeholder="Address" />
                                </Form.Group>
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