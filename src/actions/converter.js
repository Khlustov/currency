import { actionTypes } from '../constants';
import axios from 'axios';

export const getAllAbbreviations = () => {
    return async (dispatch) => {

        dispatch({
            type: actionTypes.GET_CURRENCIES_ABBREVIATIONS_START
        });

        try {
            const response = await axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');

            dispatch({
                type: actionTypes.GET_CURRENCIES_ABBREVIATIONS_SUCCESS,
                payload: response.data
            })
        }

        catch (error) {

            dispatch({
                type: actionTypes.GET_CURRENCIES_ABBREVIATIONS_FAILURE,
                payload: error.response
            })

        }

    };
};

export const onChangeTextareaValue = (payload) => {
    return {
        type: actionTypes.CHANGE_CONVERTER_VALUE,
        payload
    }
}

