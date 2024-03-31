const { singIn, createUser } = require("../services/auth.service");

async function authtorisation(req, res){
    try {
        const { email, password } = req.body;
        res.json({data: await singIn(email, password)});
    } catch (error) {
        console.log(error);
    }
}

async function registration(req, res){
    try {
        const {
            login,
            email,
            password,
            adminCode
        } = req.body;
        res.json({data: await createUser(login, email, password, adminCode)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    authtorisation,
    registration
}