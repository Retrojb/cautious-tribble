import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import HouseField from './fields/HouseField';
import { Link } from 'react-router-dom';
import FIELDS from '../../shared/constants';

class HouseForm extends Component {
   
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field 
                key={name}
                component={HouseField}
                type="text"
                label={label}
                name={name}
            />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onHouseSubmit)}>
                    {this.renderFields()}
                        <Link to={'/dashboard'} className="btn left  teal lighten-1">
                            <i className="material-icons right">cancel</i>Cancel
                        </Link>
                        <button type="submit" className="btn right teal ">Review House
                            <i className="material-icons right">navigate_next</i>
                        </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, ({ name, errorNoValue }) => {
        if (!values[name]) {
            errors[name] = errorNoValue;
        }
    });
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'houseForm', 
    destroyOnUnmount: false
})(HouseForm);