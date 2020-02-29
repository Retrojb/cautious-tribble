import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Header from './Header'
import Dashboard from '../components/Dashboard'
import HouseNew from '../components/houses/HouseNew'

class App extends Component {
     componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
                <BrowserRouter>
                        <div className="container">
                            <Header />
                            <Route exact path="/"  component={Landing}></Route>
                            <Route exact path="/dashboard"  component={Dashboard}></Route>
                            <Route exact path="/house/new"  component={HouseNew}></Route>
                        </div>
                </BrowserRouter> 
        )
    }
}

export default connect(null, actions)(App);