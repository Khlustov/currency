import { actionTypes } from '../constants'

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