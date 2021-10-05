import { actionTypes } from '../constants'

export const showAlert = (payload) => {
    return {
        type: actionTypes.SET_ALERT_ACTIVE,
        payload
    }
}

export const hideAlert = (payload) => {
    return {
        type: actionTypes.SET_ALERT_NOT_ACTIVE,
        payload
    }
}