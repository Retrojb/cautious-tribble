import React, { Component } from 'react';
import HouseForm from './HouseForm';
import HouseReviewForm from './HouseReviewForm';

class House extends Component {

    // state = { showHouseFormReview: false };
    // renderContent() {
    //     if (this.state.showHouseFormReview) {
    //         return <HouseReviewForm />
    //     }
    //     return <HouseForm 
    //         onSubmit={() => this.setState({ showHouseFormReview: true })}
    //         />
    // }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1> Welcome to your house</h1>
                 {/* {this.renderContent()} */}
            </div>
        )
    };
}

export default House;