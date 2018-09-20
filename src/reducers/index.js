import * as Actions from '../actions';

// Initial State 
const initState = {
    random: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case Actions.LOAD_DATA:
            return { ...state, random: action.random }
        default:
            return state
    }
}