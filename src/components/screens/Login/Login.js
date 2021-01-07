import React from 'react';
import withReducer from '../../../store/withReducer';
import reducer from './store/reducers/LoginReducer'
function Login() {
    return <div>login</div>
}
export default withReducer('Auth', reducer)(Login)