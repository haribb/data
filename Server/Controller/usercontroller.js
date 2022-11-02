const bcrypt = require("bcrypt");
const userModel = require("../Model/Usermodel");
const errohandler = require("../middleware/errohandler");

const Register = async (req, res, next) => {
  const { name, email, mobile, password, cpassword } = req.body;
  if (!name || !email || !mobile || !password) {
   return next(errohandler(404, "please enter invalid"));
  }
  try {
    const hashpassword = await bcrypt.hash(password, 7);
    const newuser = await userModel({
      name,
      email,
      mobile,
      password: hashpassword,
      cpassword: hashpassword,
    });

    const nameexist = await userModel.findOne({ name: name });
    if (nameexist) {
      return next(errohandler(404, "already have username"));
    }
    const emailexist = await userModel.findOne({ email: email });
    if (emailexist) {
     return next(errohandler(404, "already have email"));
    }
    if (password != cpassword) {
     return next(errohandler(401, "mismatch password"));
    }
    const usersave = await newuser.save();
    res.status(200).json({
      message: "Register Sucessfully",
      data: usersave
    });
  } catch (error) {
    next(errohandler(404,error))
  }
};

const Login =async (req, res, next)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            next(errohandler(401,"please fill in your filed"))
        }
        const useremail =await userModel.findOne({email:email})
        if(!useremail){
           return next(errohandler(401,"invalid email address"))
        }
        const userpassword = await bcrypt.compare(password,useremail.password)
        if(!userpassword){
           return next(errohandler(401,"invalid password"))
        }
    } catch (error) {
        
    }
}

module.exports={Register}