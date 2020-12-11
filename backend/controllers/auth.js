const User = require("../models/user")

// POST to add user
const signup = async (req,res) => {
    const {firstName, lastName, email, password} = req.body
    const user = User({firstName, lastName, email, password})

    try{
        const newUser = await user.save()

        res.send({
            message: 'User Created Successfully', newUser
        })
    } catch (exception){
        res.status(500).send({error: 'Email already exists'})
    }    
}


//  GET to authenticate user
const login = async (req, res) => {
    try{
        let person = await User.find({email: req.body.email, password: req.body.password})
        if (!person){
            res.status(400).send({message: 'invalid login'})
        } else{
            res.status(200).send({message: 'login successful'})
        }

    } catch (error){
        console.log(error)
    }
}

module.exports = {
    signup,
    login
}