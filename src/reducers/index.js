import { combineReducers } from 'redux';

import MainPageReducer from './MainPageReducer';
import ConverterPageReducer from './ConverterPageReducer';

export default combineReducers({
    main: MainPageReducer,
    converter: ConverterPageReducer,
})