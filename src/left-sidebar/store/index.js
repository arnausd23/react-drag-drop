import {
    createStore
} from "redux";

import addScreenReducer from './reducers/add-screen.reducer.ts';

const store = createStore(addScreenReducer);

export default store;