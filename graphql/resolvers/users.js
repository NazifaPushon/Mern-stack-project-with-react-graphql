const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {SECRET_KEY} = require('../../config')

module.exports = {
    Mutation: {
        async register(_,{registerInput : {username,email,password,confirmPassword}},context,info){
            password = await bcrypt.hash(password,12);


            const res = await User.create({
                email,
                username,
                password,
                createdAt:new Date.toISOString()
            });

            const token = jwt.sign({
                id:res._id,
                email: res.email,
                username : res.username
            },SECRET_KEY,{expiresIn:'1h'});

            return {
               res,
               token
            }
        }
    }
}