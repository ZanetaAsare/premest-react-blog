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

    const { email, password } = req.body;

    try {
      let user = await User.findOne({email});

      if (!user){
        return res.status(400).send({
          message: "User Does Not Exist"
        });
        }
        const isMatch = await (password === user.password)
  
      if (!isMatch){
        return res.status(400).send({
          message: "Incorrect Password !"
        });
        } 
        res.status(200).send({message: 'Login Successful'})
    } catch (e) {
        console.error(e);
        res.status(500).send({
        message: "Server Error"
        });
    }
}

module.exports = {
    signup,
    login
}