export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_FULLNAME = 'SET_USER_FULLNAME';
export const SET_USER_CONFIRM_PASSWORD = 'SET_USER_CONFIRM_PASSWORD';
export const SET_USER_MAILS = 'SET_USER_MAILS';
export const SET_PASSWORDS = 'SET_PASSWORDS';
export const SET_VALID_MAIL = 'SET_VALID_MAIL';
export const SET_VALID_PASSWORD = 'SET_VALID_PASSWORD';
export const SET_VALID_CONFIRM_PASSWORD = 'SET_VALID_CONFIRM_PASSWORD';

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

export const setValidMail = validMail => dispatch => {
    dispatch({
        type: SET_VALID_MAIL,
        payload: validMail,
    });
};

export const setValidPassword = validPassword => dispatch => {
    dispatch({
        type: SET_VALID_PASSWORD,
        payload: validPassword,
    });
};

export const setValidConfirmPassword = validConfirmPassword => dispatch => {
    dispatch({
        type: SET_VALID_CONFIRM_PASSWORD,
        payload: validConfirmPassword,
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
