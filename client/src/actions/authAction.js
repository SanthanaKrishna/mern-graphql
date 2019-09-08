export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const signup = (values) => ({
    type: SIGN_UP,
    payload: values
})

export const signupSucess = (data) => ({
    type: SIGN_UP_SUCCESS,
    payload: data
})

export const signupFailure = (error) => ({
    type: SIGN_UP_FAILURE,
    error
})