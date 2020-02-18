import {SET_MESSAGE} from "./types";

const initialState = {
  message: "This is a old reducer duck"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            const message = action.message;
            return {message};
        default:
            return state
    }
};
