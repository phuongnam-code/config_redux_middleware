//types
import { exampleTypes } from "./example.type";

export const setVariable = (value) => {
    return (dispatch) => {
        dispatch({
            type: exampleTypes.SET_VARIABLE,
            payload: value
        });
    }
}