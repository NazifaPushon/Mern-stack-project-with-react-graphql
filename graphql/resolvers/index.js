const postResolvers = require('./posts')
const userResolvers = require('./users')
const commentResolvers = require('./commnet')

module.exports = {
    Query:{
        ...postResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation
    }
}