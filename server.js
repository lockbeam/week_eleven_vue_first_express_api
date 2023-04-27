let express = require('express')
let routes = require('./routes/routes.js')

//below is to get our server to be able to run the code in the dist directory
//dist directory is created by running npm run build
// which creates a 'final' and 'mini-fied' version of the code
let path = require('path')

let app = express()

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
let vueApp = express.static(pathToVueApp)
// there are specific files in this static path that need to be served
app.use('/', vueApp)
// '/' represents homepage of our app

app.use('/api', routes)
// telling the api to use the route we just created


//start the server running below on a particular port
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
//if the computer running has specified a specific port to use use that port but if it hasn't use port 3000
//don't need the function just using it to make sure we get feedback that the app is running



