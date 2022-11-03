export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_FULLNAME = 'SET_USER_FULLNAME';
export const SET_USER_CONFIRM_PASSWORD = 'SET_USER_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER_MAILS = 'SET_USER_MAILS';
export const SET_PASSWORDS = 'SET_PASSWORDS';

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    });
};

export const setPassword = password => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    });
};

export const setFullName = fullName => dispatch => {
    dispatch({
        type: SET_USER_FULLNAME,
        payload: fullName,
    });
};

export const setConfirmPassword = confirmPassword => dispatch => {
    dispatch({
        type: SET_USER_CONFIRM_PASSWORD,
        payload: confirmPassword,
    });
};

export const setError = error => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error,
    });
};

export const setUserMails = email => dispatch => {
    dispatch({
        type: SET_USER_MAILS,
        payload: email,
    });
};

export const setUserPasswords = pass => dispatch => {
    dispatch({
        type: SET_PASSWORDS,
        payload: pass,
    });
};
