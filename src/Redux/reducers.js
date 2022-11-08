import {
    SET_USER_CONFIRM_PASSWORD,
    SET_USER_EMAIL,
    SET_USER_FULLNAME,
    SET_USER_PASSWORD,
    SET_USER_MAILS,
    SET_PASSWORDS,
    SET_VALID_MAIL,
    SET_VALID_PASSWORD,
    SET_VALID_CONFIRM_PASSWORD
} from "./actions";

const initialState = {
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    validMail: true,
    validPassword: true,
    validConfirmPassword: true,
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
        case SET_VALID_MAIL:
            return { ...state, validMail: action.payload };
        case SET_VALID_PASSWORD:
            return { ...state, validPassword: action.payload };
        case SET_VALID_CONFIRM_PASSWORD:
            return { ...state, validConfirmPassword: action.payload };
        case SET_USER_MAILS:
            return { ...state, mailArr: [...state.mailArr, action.payload] };
        case SET_PASSWORDS:
            return { ...state, passwordArr: [...state.passwordArr, action.payload] };
        default:
            return state;
    }
}

export default userReducer;