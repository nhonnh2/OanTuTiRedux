import { createStore, combineReducers } from 'redux';
import gameOanTuTiReducer from './reducer/GameOanTuTiReducer';

//khởi tạo root reduce
const rootReducer = combineReducers({
    gameOanTuTiReducer
});
//khởi tạo redux store
const store = createStore(rootReducer,
    //config redux devtool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;