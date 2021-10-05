import { combineReducers } from 'redux';

import MainPageReducer from './MainPageReducer';
import ConverterPageReducer from './ConverterPageReducer';
import EmailModalReducer from './FooterReducer';
import AlertsReducer from './AlertsReducer';

export default combineReducers({
    main: MainPageReducer,
    converter: ConverterPageReducer,
    emailModal: EmailModalReducer,
    alerts: AlertsReducer,
})