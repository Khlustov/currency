import { actionTypes } from '../constants';

const initialState = {
    currencies: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {        
        case actionTypes.GET_ALL_CURRENCIES_START: 
            return {
                ...state,
                loading: true,
            };       
        case actionTypes.GET_ALL_CURRENCIES_SUCCESS: 
            return {
                ...state,
                currencies: action.payload,
                loading: false,
            };        
        case actionTypes.GET_ALLCURRENCIESS_FAILURE: 
            return {
                ...state,
                loading: true,
                error: action.payload,
            };        
        default: return state;
    };
};

export default reducer;