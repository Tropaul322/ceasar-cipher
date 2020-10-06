function isUpperCase(str) {
    return str === str.toUpperCase();
}

const caesarCipherEncode = (string, shift) => {
    let cipher = "";
    const arr = string.split("");
    arr.forEach((el, idx) => {
        if (
            (string.charCodeAt(idx) >= 65 && string.charCodeAt(idx) <= 90) ||
            (string.charCodeAt(idx) >= 97 && string.charCodeAt(idx) <= 122)
        ) {
            if (isUpperCase(el)) {
                cipher += String.fromCharCode(
                    ((string.charCodeAt(idx) + shift - 65) % 26) + 65
                );
            } else {
                cipher += String.fromCharCode(
                    ((string.charCodeAt(idx) + shift - 97) % 26) + 97
                );
            }
        } else {
            cipher += el;
        }
    });
    return cipher;
};

const caesarCipherDecode = (string, shift) => {
    let cipher = "";
    const arr = string.split("");
    arr.forEach((el, idx) => {
        if (
            (string.charCodeAt(idx) >= 65 && string.charCodeAt(idx) <= 90) ||
            (string.charCodeAt(idx) >= 97 && string.charCodeAt(idx) <= 122)
        ) {
            if (isUpperCase(el)) {
                cipher += String.fromCharCode(
                    ((string.charCodeAt(idx) - shift - 65) % 26) + 65
                );
            } else {
                cipher += String.fromCharCode(
                    ((string.charCodeAt(idx) - shift - 97) % 26) + 97
                );
            }
        } else {
            cipher += el;
        }
    });
    return cipher;
};

module.exports = { caesarCipherEncode, caesarCipherDecode }