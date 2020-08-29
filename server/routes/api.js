const express = require('express');
const router = express.Router();
const request = require('request');
//NOTE : Can Make seperate controller functions
//get users
router.get('/getData', (req, res) => {
   console.log("INSIDE USERS")
   //res.send("REACHED")
   request.get('https://jsonplaceholder.typicode.com/todos/1', function(err, response, body) {
    res.send(response.body);
   });
});

router.post('/postData', (req, res) => {
  let params = res.body;
  request.post('https://reqres.in/api/users', params, (error, response, body) => {
    if (error) {
      console.error(error)
      return
    }
    res.send(response)
  })
});

router.delete('/users/:index', (req, res) => {
  
});

module.exports = router;