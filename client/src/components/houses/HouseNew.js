import React, { Component } from "react";
import {reduxForm} from 'redux-form';
import HouseForm from './HouseForm';
import HouseReviewForm from './HouseReviewForm';

class HouseNew extends Component {

    state = { showHouseReviewForm: false };
    
    renderContent() {
        if (this.state.showHouseReviewForm) {
            return <HouseReviewForm 
                        onCancel={() => this.setState({ showHouseReviewForm: false })}
                    />
        }
            return <HouseForm 
                        onHouseSubmit={() => this.setState({ showHouseReviewForm: true })}
                    />
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                 {this.renderContent()}
            </div>
        )
    };

}

export default reduxForm({
    form: 'houseForm'
})(HouseNew);