import { actionTypes } from '../constants';

const initialState = {  
    inputValue: '',    
};

const reducer = (state = initialState, action) => {
    switch(action.type) {       

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