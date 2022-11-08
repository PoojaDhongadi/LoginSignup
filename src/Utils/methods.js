

// export const isAllFieldsFill = (obj) => {
//     //converts obj to array
//     return Object.values(obj).every(value => value.trim())
// }


export const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
}

export const isContainsUppercase = (value) => {
    const regx = /^(?=.*[A-Z]).*$/;
    return regx.test(value);
}

export const isContainsLowercase = (value) => {
    const regx = /^(?=.*[a-z]).*$/;
    return regx.test(value);
}

export const isContainsNumber = (value) => {
    const regx = /^(?=.*[0-9]).*$/;
    return regx.test(value);
}


export const isContainsSymbol = (value) => {
    const regx = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    return regx.test(value);
}
