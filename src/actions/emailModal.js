import { actionTypes } from '../constants'

// email modal window actions
export const showEmailModal = (payload) => {
    return {
        type: actionTypes.SET_EMAIL_MODAL_ACTIVE,
        payload
    }
}

export const hideEmailModal = (payload) => {
    return {
        type: actionTypes.SET_EMAIL_MODAL_NOT_ACTIVE,
        payload
    }
}


// email modal window inputs actions
export const changeEmailSenderName = (payload) => {
    return {
        type: actionTypes.CHANGE_EMAIL_SENDER_NAME,
        payload
    }
}

export const changeEmailSenderAdress = (payload) => {
    return {
        type: actionTypes.CHANGE_EMAIL_SENDER_ADRESS,
        payload
    }
}

export const changeEmailSenderMessage = (payload) => {
    return {
        type: actionTypes.CHANGE_EMAIL_SENDER_MESSAGE,
        payload
    }
}