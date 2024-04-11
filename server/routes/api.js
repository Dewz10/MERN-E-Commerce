const express = require('express');
const router = express.Router();

// Controller
const {register,listUser,editUser,deleteUser} = require('../controllers/auth');

//@Endpoint http://localhost:3000/api/auth
//@Method   GET
//@Access   Publish
router.get('/auth',listUser)

//@Endpoint http://localhost:3000/api/auth
//@Method   POST
//@Access   Publish
router.post('/auth',register)

//@Endpoint http://localhost:3000/api/auth
//@Method   PUT
//@Access   Publish
router.put('/auth',editUser)

//@Endpoint http://localhost:3000/api/auth
//@Method   DELETE
//@Access   Publish
router.delete('/auth',deleteUser)

module.exports = router;