import * as ActionTypes from './ActionTypes'


const initialState = {
    counter: { amount: 0 },
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state, counter: { amount: state.counter.amount + 1 }
            };
            case ActionTypes.RESET:
            return {
                ...state, counter: { amount: 0 }
            };
        default:
            return state;

    }
}