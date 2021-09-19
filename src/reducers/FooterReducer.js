import { actionTypes } from '../constants';

const initialState = {
    active: false,
    emailSenderName: '',
    emailSenderAdress: '',
    emailSenderMessage: '',
    successSendingEmail: false,
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
                emailSenderName: '',
                emailSenderAdress: '',
                emailSenderMessage: '',
            }; 
         
        case actionTypes.CHANGE_EMAIL_SENDER_NAME:
            return {
                ...state,
                emailSenderName: action.payload,
            };

        case actionTypes.CHANGE_EMAIL_SENDER_ADRESS:
            return {
                ...state,
                emailSenderAdress: action.payload,
            };

        case actionTypes.CHANGE_EMAIL_SENDER_MESSAGE:
            return {
                ...state,
                emailSenderMessage: action.payload,
            };

        default: return state;
    };
};

export default reducer;