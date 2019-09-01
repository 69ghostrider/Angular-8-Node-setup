const express = require('express');
const router = express.Router();
const request = require('request');

//get users
router.get('/users', (req, res) => {
   console.log("INSIDE USERS")
   res.send("REACHED")
  request('http://dummy.restapiexample.com/api/v1/employees', function(err, res, body) {
    console.log(body);
});
});

router.post('/users', (req, res) => {
    
});

router.delete('/users/:index', (req, res) => {
  
});

module.exports = router;