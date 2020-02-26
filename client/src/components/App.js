import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'
const Landing = () => <h1>Landing Page</h1>
const Profile = () => <h3>Profile Page</h3>



const App = () => {
    return (
        <div>
           <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/"  component={ Landing }></Route>
                    <Route path="/profile"  component={ Profile }></Route>
                </div>
           </BrowserRouter> 
        </div>
    )
}

export default App;