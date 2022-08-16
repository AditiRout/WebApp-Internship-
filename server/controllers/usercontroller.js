const asyncHandler = require("express-async-handler");
const User = require("../model/usermodel.js");
const generateToken = require("../config/token");




const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      var tt=generateToken(user._id)
      res.json({
        _id: user._id,
        firstname: user.firstname,
        email: user.email,
        token: tt,
      });
      console.log(tt)
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const RegisterUser = asyncHandler(async (req, res) => {
    const { firstname,lastname,email,password } = req.body;
  
    if (!firstname || !lastname || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400);
       throw new Error("User already exists");
    }
  
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    if (user) {
        res.status(201).json({
          _id: user._id,
          firstname: user.firstname,
          lastname:user.lastname,
          email: user.email,
          token: generateToken(user._id),
        });
        // res.redirect('/')
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    
  

  }

 
)
  
       

  module.exports={RegisterUser,authUser}