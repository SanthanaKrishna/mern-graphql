// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

exports.resolvers = {
    Query: {
        getCurrentUser: async (parent, args, context) => {
            const { User } = context;
            const currentUser = await User.find();
            return currentUser;
        }
    },

    Mutation: {
        signUpUser: async (parent, args, context) => {
            const { User } = context;
            const { username, email, password } = args;
            // const user = await User.findOne({ email })
            // if (!user) {
            //     throw new Error('User already exists');
            // }
            const newUser = await new User({
                username,
                email,
                password
            }).save();
            return newUser;
        }
    }
}