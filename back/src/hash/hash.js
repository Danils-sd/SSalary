const crypto = require("crypto");
const { HASH_ALG, HASH_PASS } = require("./hash-key")

function encrypt(text){
    try{
        const cipher = crypto.createCipher(HASH_ALG, HASH_PASS);
        let crypted = cipher.update(text, "utf8", "hex");
        crypted += cipher.final("hex");
        return crypted;
    } catch(error) {
        console.log(`error in encrypting:\n${error}`);
        return -1;
    }
}

function decrypt(text){
    try {
        const decipher = crypto.createDecipher(HASH_ALG, HASH_PASS);
        let dec = decipher.update(text, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    } catch (error) {
        console.log(`error in dencrypting:\n${error}`);
        return -1;
    }
}

module.exports = {
    encrypt,
    decrypt
}