import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Welcome to your dashboard</h1>
            <div>
                <h3>You Dont have a house</h3>
                <div className="fixed-action btn">
                    <Link to={'/house/create'} 
                    className="btn btn-primary"
                    >Create your house</Link>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;