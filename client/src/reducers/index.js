import {combinedReducers} from 'redux';
import authReducers from './authReducers';

export default  ({
    auth : authReducers
})