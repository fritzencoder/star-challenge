import { combineReducers } from "redux";

import search from './SearchReducer';
import single from './SingleReducer';

export default combineReducers({

    search,
    single

});
