import {
    SET_ERROR,
    SET_USER_CONFIRM_PASSWORD,
    SET_USER_EMAIL,
    SET_USER_FULLNAME,
    SET_USER_PASSWORD,
    SET_USER_MAILS,
    SET_PASSWORDS
} from "./actions";

const initialState = {
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    error: '',
    mailArr: [],
    passwordArr: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_EMAIL:
            return { ...state, email: action.payload };
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload };
        case SET_USER_FULLNAME:
            return { ...state, fullName: action.payload };
        case SET_USER_CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload };
        case SET_USER_MAILS:
            return { ...state, mailArr: [...state.mailArr, action.payload] };
        case SET_PASSWORDS:
            return { ...state, passwordArr: [...state.passwordArr, action.payload] };
        default:
            return state;
    }
}

export default userReducer;