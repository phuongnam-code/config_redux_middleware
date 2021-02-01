//types
import { exampleTypes } from "./example.type";

const initialState = {
    exampleVar: ''
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case exampleTypes.SET_VARIABLE:{
            return {
                ...state,
                exampleVar: action.payload
            }
        }
        default:
            return state;
    }
};

export default exampleReducer;