import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateUser from './CreateUserComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';
import ShowAll from "./HomepageComponent";
import AddPersonal from "./AddPersonalComponent";


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/createuser" component={CreateUser} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/showrecords" component={ShowAll} />
                            <Route exact path="/addpersonal" component={AddPersonal} />
                        </div>
                    </Router>

                </div>
            </div>
        )
    }
}
export default App;
