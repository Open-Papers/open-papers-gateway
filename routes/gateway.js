const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/heartbeat',(req,res,next)=>{
 axios({
    method: 'get',
    url: 'https://open-papers-dclient.herokuapp.com/api/base/heartbeat'
 })
 .then(result=>{
       console.log(result.data),
       res.status(200).json(result.data)
 })
 .catch(err=>{
    console.log(err);
    res.status(500).json({error : err})
});
})
module.exports = router