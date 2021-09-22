import { actionTypes } from '../constants';


export const onChangeTextareaValue = (payload) => {
    return {
        type: actionTypes.CHANGE_CONVERTER_VALUE,
        payload
    }
}

