const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {UserInputError} = require('apollo-server')
const {SECRET_KEY} = require('../../config')

module.exports = {
    Mutation: {
        async register(_,{registerInput : {username,email,password,confirmPassword}},context,info){
            password = await bcrypt.hash(password,12);

            const user = await User.findOne({username})
            if(user){
                throw new UserInputError("Username is taken",{
                    errors : {
                        username:"This username is taken"
                    }
                })
            }
            const newUser = new User ({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            }) 
            const res = await newUser.save();
            console.log(res)
            const token = jwt.sign({
                id:res._id,
                email: res.email,
                username : res.username
            },SECRET_KEY,{expiresIn:'1h'});

            return {
                username : res.username,
                email:res.email,
                createdAt:res.createdAt,
                _id:res._id,
                token,
            }
               
            
        }
    }
}