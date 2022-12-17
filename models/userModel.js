const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        rquired: true
    }
})

//static sign up method
userSchema.statics.signup = async function(email, password) {

    //validation

    if (!email || !password){
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if (!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough");
    }

    const exists = await this.findOne({ email }) //use this to refer to this model.

    if(exists){
        throw Error('email already in use')
    }
    
    const salt = await bcrypt.genSalt(10) //generates extra characters to strengthen password
    const hash = await bcrypt.hash(password, salt) //hashes salted password 

    const user = await this.create({email, password: hash}) //creates mongoose document

    return user;
}


module.exports = mongoose.model('User', userSchema)