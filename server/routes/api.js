const express = require('express');
const router = express.Router();

//@Endpoint http://localhost:3000/api/auth
//@Method   GET
//@Access   Publish
router.get('/auth',(req,res)=>{
    res.send('Hello API Dewdev GET')
})

//@Endpoint http://localhost:3000/api/auth
//@Method   POST
//@Access   Publish
router.post('/auth',(req,res)=>{
    res.send(res.req.body)
})

//@Endpoint http://localhost:3000/api/auth
//@Method   PUT
//@Access   Publish
router.put('/auth',(req,res)=>{
    res.send('Hello API Dewdev PUT')
})

//@Endpoint http://localhost:3000/api/auth
//@Method   DELETE
//@Access   Publish
router.delete('/auth',(req,res)=>{
    res.send('Hello API Dewdev DELETE')
})


module.exports = router;