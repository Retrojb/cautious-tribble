import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import FIELDS from '../../shared/constants';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const HouseReviewForm = ({ onCancel, formValues, createHouse, history }) => {
    const reviewFields = _.map(FIELDS, ({name, label}) => {
        return (
        <div key={name}>
            <label>{ label}</label>
            <div>{formValues[name]}</div>
        </div>
        )
    })
    
    return (
        <div>
            <h3>Please review your house</h3>
            <div>
               {reviewFields} 
            </div>
            <button className="btn teal"
                onClick={onCancel}>Return to form
            </button>
            <button
                onClick={() => createHouse(formValues, history)}
                className="btn">Create House
            <i className="material-icons right">cloud</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form.houseForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(HouseReviewForm));