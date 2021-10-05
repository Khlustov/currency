import { actionTypes } from '../constants';

const initialState = {
    activeAlert: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {        
        case actionTypes.SET_ALERT_ACTIVE: 
            return {
                ...state,
                activeAlert: true,
            }; 

        case actionTypes.SET_ALERT_NOT_ACTIVE:
            return {
                ...state,
                activeAlert: false
            }

        default: return state;
    };
};

export default reducer;