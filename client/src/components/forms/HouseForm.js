import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import HouseField from './fields/HouseField';
import { Link } from 'react-router-dom';
import FIELDS from '../../shared/constants';
// const FIELDS = [
//     { label: 'House Name',  name: 'houseName' },
//     { label: 'House Type',  name: 'houseType' },
//     { label: 'Owner',  name: 'owner' },
//     { label: 'Street',  name: 'street' },
//     { label: 'City',  name: 'city' },
//     { label: 'State',  name: 'state' },
//     { label: 'Zipcode',  name: 'zipcode' }
// ];

class HouseForm extends Component {


   renderFields() {
       return _.map(FIELDS, ({ label, name }) => {
           return <Field key={ name } component={HouseField} type="text" label={label} name={name} />
       })
   }

    render() {
    return (
       <div>
           <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
               <div>
                   <Link to={'/dashboard'} className="btn left  teal lighten-1">
                        <i className="material-icons right">cancel</i>Cancel
                   </Link>
                    <button type="submit" className="btn right teal ">Review House
                    <i className="material-icons right">navigate_next</i>
                    </button>
               </div>
           </form>
       </div>
    ) 
    }
}

function validate(values) {
    const errors = {};
    if(!values.houseName) {
        errors.houseName = 'You need to add a house name'
    }
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'houseForm'
})(HouseForm);