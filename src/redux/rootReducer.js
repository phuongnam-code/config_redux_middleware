import { combineReducers } from "redux";

//reducer
import exampleReducer from './example/example.reducer';

const rootReducer = combineReducers({
	exampleReducer,
});

export default rootReducer;