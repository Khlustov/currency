import { combineReducers } from 'redux';

import MainPageReducer from './MainPageReducer';
import ConverterPageReducer from './ConverterPageReducer';
import EmailModalReducer from './FooterReducer';

export default combineReducers({
    main: MainPageReducer,
    converter: ConverterPageReducer,
    emailModal: EmailModalReducer,
})