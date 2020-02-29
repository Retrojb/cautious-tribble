import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import houseReducer from './houseReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    house: houseReducer
})