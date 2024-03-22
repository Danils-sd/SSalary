const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");

const config = require("./base-key.json")

const app = initializeApp(config);

const auth = getAuth(app);

async function login(email, password){
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user._tokenResponse.localId
    } catch(error){
        console.log(error)
        return -1
    }
}

async function regist(email, password){
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user._tokenResponse.localId
    } catch (error) {
        console.log(error)
        return -1
    }
}

module.exports = {
    login,
    regist
}