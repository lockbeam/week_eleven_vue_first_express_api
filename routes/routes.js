let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
   //router.get fethces data
   //and the funciton will run to provide a response
   // req short for request
   // res short for response from server
   // next - not using in this app but will use in next app

   res.json({'message': 'hello this message should be displaying'})
   //whatever the request is we are returning a response in json format

})

module.exports = router
//another file will be able to include or require this file and it will be able to acess the router
// object that has been conffigured above with the mapping of path function