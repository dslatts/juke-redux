import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root-reducer';
import createLogger from 'redux-logger';

let store = createStore(rootReducer, applyMiddleware(createLogger()));

export default store;