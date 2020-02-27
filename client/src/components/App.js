import 'materialize-css/dist/css/materialize.min.css'
import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
const Landing = () => <h1>Landing Page</h1>
const Dashboard = () => <h3>User Dashboard</h3>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                        <div>
                            <Header />
                            <Route exact path="/"  component={ Landing }></Route>
                            <Route path="/profile"  component={ Dashboard }></Route>
                        </div>
                </BrowserRouter> 
            </div>
        )
    }
}

export default connect(null, actions)(App);