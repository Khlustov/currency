import { actionTypes } from '../constants';
import axios from 'axios';

export const getAllCurrencies = () => {
    return async (dispatch) => {

        dispatch({
            type: actionTypes.GET_ALL_CURRENCIES_START
        });

        try {
            const response = await axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');

            dispatch({
                type: actionTypes.GET_ALL_CURRENCIES_SUCCESS,
                payload: response.data
            })
        }

        catch (error) {

            dispatch({
                type: actionTypes.GET_ALLCURRENCIESS_FAILURE,
                payload: error.response
            })

        }

    };
};