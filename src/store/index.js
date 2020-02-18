import { combineReducers } from 'redux';
import { createStore} from 'redux';
import oldReducer from "./old-reducer/reducer"
import newReducer from "./new-reducer/new-reducer.ducks"


const rootReducer = combineReducers({
    oldReducer,
    newReducer: newReducer.reducer
});

const store = createStore(rootReducer);

export default store;



