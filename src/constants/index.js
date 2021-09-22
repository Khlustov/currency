export const ROUTES = {
    MAIN: '/',
    CONVERTER: '/converter'
};

export const actionTypes = {
    // get currencies actions
    GET_ALL_CURRENCIES_START: 'GET_ALL_CURRENCIES_START',
    GET_ALL_CURRENCIES_SUCCESS: 'GET_ALL_CURRENCIES_SUCCESS',
    GET_ALL_CURRENCIESS_FAILURE: 'GET_ALL_CURRENCIES_FAILURE',
    
    // email modal window actions
    SET_EMAIL_MODAL_ACTIVE: 'SET_EMAIL_MODAL_ACTIVE',
    SET_EMAIL_MODAL_NOT_ACTIVE: 'SET_EMAIL_MODAL_NOT_ACTIVE',
    
    // email modal window inputs actions
    CHANGE_EMAIL_SENDER_NAME: 'CHANGE_EMAIL_SENDER_NAME',
    CHANGE_EMAIL_SENDER_ADRESS: 'CHANGE_EMAIL_SENDER_ADRESS',
    CHANGE_EMAIL_SENDER_MESSAGE: 'CHANGE_EMAIL_SENDER_MESSAGE',    
    
    // converter page input actions
    CHANGE_CONVERTER_VALUE: 'CHANGE_CONVERTER_VALUE',
}