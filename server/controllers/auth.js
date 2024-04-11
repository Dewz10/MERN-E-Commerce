const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    // check user
    const { username, password } = req.body;
    var user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User Already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // Await the password hashing
    user = new User({
      username,
      password: hashedPassword, // Assign the hashed password
    });
    await user.save();
    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req,res) => {
    try{
        const { username, password } = req.body;
        var user = await User.findOneAndUpdate({username},{new: true});
        if (user && user.enabled) {
            // Check password
            const isMatch = await bcrypt.compare(password,user.password);
            
            if (!isMatch) {
                return res.status(400).send('Password Invalid!');
            }
            // Create payload
            const payload = {
                user: {
                    username: user.username,
                    role: user.role
                }
            }
            // Gen token
            jwt.sign(payload,'jwtSecret',{ expiresIn: 3600 },(err,token)=>{
                if (err) throw err;
                res.json({token,payload})
            });

        } else {
            return res.status(400).send('User not found!');
        }
    }catch(err) {
        console.log(err);
        res.status(500).send('Server Error!');
    } 
}

exports.editUser = async (req, res) => {
  try {
    res.send("edit user");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    res.send("delete user");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.listUser = async (req, res) => {
  try {
    res.send("list get user");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
