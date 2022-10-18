import {changeFormData,changeSignupData,changeLoginData} from "./reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeFormData,
    changeSignupData,
    changeLoginData
})

export default rootReducer;