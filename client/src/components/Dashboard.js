import React from 'react';
import { Link } from 'react-router-dom';
import HouseList from './houses/HouseList';

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Welcome to your dashboard</h1>
            <div>
                <div className="fixed-action btn">
                    <Link to={'/house/new'} 
                    className="btn btn-primary"
                    >Create your house</Link>
                </div>
                <HouseList />
            </div>
        </div>
    )
}

export default Dashboard;