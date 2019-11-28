import React from 'react';
import { Table, Button, Navbar, Form } from 'react-bootstrap'

export default class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            record: []
        };
    }

    componentDidMount = () => {
        fetch(`http://localhost:6400/homepage`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    record: data
                })
            })
    }

    Logout = () => {
        sessionStorage.removeItem('role')
        this.props.history.push('/home')
    }

    Delete = (regno) => {
        var userD = JSON.stringify({
            regno: regno
        })
        fetch(`http://localhost:6400/delete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: userD
        })
        window.location.reload()
    }

    editShow = (name, address, regno) => {
        var nameI = document.getElementById('nameE')
        var addressI = document.getElementById('addressE')
        var eForm = document.getElementById('eForm');
        eForm.style.visibility = "visible"
        nameI.placeholder = name;
        addressI.placeholder = address
        sessionStorage.setItem('regno', `${regno}`);
    }
    editPost = (e) => {
        var name = e.target.n.value;
        var address = e.target.a.value;
        var editRecord = JSON.stringify({
            name: name,
            address: address,
            regno: sessionStorage.getItem('regno')
        })

        fetch(`http://localhost:6400/edit`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: editRecord
        })
        var eForm = document.getElementById('eForm');
        eForm.style.visibility = "hidden"
        window.location.reload();
    }


    render() {
        if (sessionStorage.getItem('role') == 'Admin') {
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
                        <Button style={{ marginRight: "5px" }} variant="outline-info" href="/addpersonal">Create Personal</Button>
                            <Button variant="outline-info" onClick={() => this.Logout()}>Logout</Button>
                        </Form>
                    </Navbar>
                    <center><h2 style={{ color: 'grey' }}>List of {this.state.record.length} Employees</h2></center>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <Table style={{ position: 'relative', left: '170px' }} striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <td><center>RegNo</center></td>
                                            <td><center>Name</center></td>
                                            <td><center>Address</center></td>
                                            <td><center>Operations</center></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.record.map(data => {
                                                return (
                                                    <tr >
                                                        <td><center>{data.regno}</center></td>
                                                        <td><center>{data.name}</center></td>
                                                        <td><center>{data.address}</center></td>
                                                        <td> <Button style={{ marginRight: "40px", marginLeft: "40px" }} variant="outline-info" onClick={() => this.editShow(data.name, data.address, data.regno)}>Edit</Button>
                                                            <Button variant="outline-info" onClick={() => this.Delete(data.regno)}>Delete</Button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <Form id='eForm' style={{ visibility: 'hidden', position: 'relative', left: '170px' }} onSubmit={this.editPost}>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label style={{ color: 'grey' }}>Name:</Form.Label>
                                        <Form.Control name="n" id="nameE" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label style={{ color: 'grey' }}>Username:</Form.Label>
                                        <Form.Control name="a" id="addressE" /><br/>
                                        <Button variant="info" type="submit">
                                            Submit
                                     </Button>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        else if (sessionStorage.getItem('role') == 'User') {
            return (
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/home" className="mr-auto"><img
                            src="logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        <Form inline>
                            <Button variant="outline-info" onClick={() => this.Logout()}>Logout</Button>
                        </Form>
                    </Navbar>
                    <center><h2 style={{ color: 'grey' }}>List of {this.state.record.length} Employees</h2></center>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <Table style={{ position: 'relative', left: '170px' }} striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <td><center>RegNo</center></td>
                                            <td><center>Name</center></td>
                                            <td><center>Address</center></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.record.map(data => {
                                                return (
                                                    <tr>
                                                        <td><center>{data.regno}</center></td>
                                                        <td><center>{data.name}</center></td>
                                                        <td><center>Admin Only</center></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        else {
            this.props.history.push('/login')
            window.location.reload(true);
        }
    }
}
