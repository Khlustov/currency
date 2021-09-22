import { actionTypes } from '../constants';

const initialState = {
    abbreviation: [],
    retes: {},
    inputValue: '',
    loading: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch(action.type) {  

        case actionTypes.GET_CURRENCIES_ABBREVIATIONS_START: 
            return {
                ...state,
                loading: true,
            };       
        
        case actionTypes.GET_CURRENCIES_ABBREVIATIONS_SUCCESS: 
            return {
                ...state,
                loading:false,
                abbreviation: action.payload
            };

        case actionTypes.GET_CURRENCIES_ABBREVIATIONS_FAILURE: 
            return {
                ...state,
                error: action.payload
            };

        case actionTypes.CHANGE_CONVERTER_VALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }

        default: return state;
    };
};

export default reducer;