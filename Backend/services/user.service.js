const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All the fields are mandatory')
    }
    const user = await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}
