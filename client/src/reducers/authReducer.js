import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions/authAction';


const initialState = {
    isLoading: false,
    auth: []
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                loading: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                auth: action.payload
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                auth: action.error
            }
        default:
            return state;
    }
}