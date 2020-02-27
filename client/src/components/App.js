import 'materialize-css/dist/css/materialize.min.css'
import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header'
import Dashboard from './House'

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
                            <Route exact path="/"  component={Landing}></Route>
                            <Route path="/house"  component={Dashboard}></Route>
                        </div>
                </BrowserRouter> 
            </div>
        )
    }
}

export default connect(null, actions)(App);