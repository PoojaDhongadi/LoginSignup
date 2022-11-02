
export const isAllFieldsFill = (obj) => {
    //converts obj to array
    return Object.values(obj).every(value => value.trim())
}

export const showError = (errorMsg, setError) => {
    setError(errorMsg);
    setTimeout(() => {
        setError('');
    }, 3000);
}

export const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
}