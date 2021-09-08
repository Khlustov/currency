import { actionTypes } from '../constants';

const initialState = {
    active: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {        
        case actionTypes.SET_EMAIL_MODAL_ACTIVE: 
            return {
                ...state,
                active: true,
            };       
        case actionTypes.SET_EMAIL_MODAL_NOT_ACTIVE: 
            return {
                ...state,
                active: false,
            };    
            default: return state;
    };
};

export default reducer;