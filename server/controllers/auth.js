const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
