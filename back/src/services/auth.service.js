const data = require("../configs/admin.config");
const { login, regist } = require("../configs/base.config");
const { encrypt, decrypt } = require("../hash/hash");

async function singIn(email, password){
    try {
        const uId = await login(email, password);
        return encrypt(uId);
    } catch (error) {
        console.log(error);
        return -1;
    }
}

async function createUser(login, email, password, adminCode){
    try {
        const adminDB = await data.collection("adminResurs").doc("adminUniversalData").get();
        if(adminDB._fieldsProto.enterCode.stringValue != adminCode){
            return 0;
        } else {
            const uId = await regist(email, password);
            if(uId != -1){
                const docRef = data.collection("users").doc(uId);
                await docRef.set({
                    login: login,
                    email: email,
                    password: password
            });
            return encrypt(uId);
        }
        return -1;
        }
    } catch (error) {
        console.log(error);
        return -1;
    }
}

module.exports = {
    singIn,
    createUser
}