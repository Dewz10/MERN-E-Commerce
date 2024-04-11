exports.register = async (req, res) => {
  try {
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.editUser = async(req,res)=>{
    try{
        res.send('edit user');
    }catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        res.send('delete user');
    }catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}

exports.listUser = async(req,res)=>{
    try{
        res.send('list get user');
    }catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}