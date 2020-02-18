
const types = {
    SET_MESSAGE: "NEW_REDUCER/SET_MESSAGE"
};

const actions = {
    setMessage: (message) => {
        return {
            type: types.SET_MESSAGE,
            message
        }
    }
};

const initialState = {
  message: "This is a new reducer duck"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MESSAGE:
            const message = action.message;
            return {message};
        default:
            return state
    }
};

export default {reducer, actions, types};
