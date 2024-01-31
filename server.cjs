// handle all requests
//send html,css,js files
// import in js-> require in cjs
// export{} in js->module.exports={} in cjs
//express stored in variable
const express = require('express')
const bodyParser = require('body-parser')
const { request } = require('http')
//app is backend application
//create new application
const app = express()
// __dirname access all the files in that directory for example nodejs2
app.use(express.static(__dirname))

// body-parser convert body to an understadable form for nofe
app.use(bodyParser.json()) // node cannot read body directly,so body-parser change into a data
//how to capture request - get()-same name should be as url send at client side eg. /get-data
// capturing the request
//GET METHOD
app.get('/get-data',function(request,response){
     console.log(request)//request will get
     const respData={
          "name":"malar",
          "password":"1234"
     }


     //status code->resopnse status- sending response
     response.status(200).json(respData)
     
})

//POST METHOD
app.post('/verify-user',function(request,response){
     console.log(request.body)
     if(request.body.username === 'malar' && request.body.password === "1234")

     {
       response.status(200).json({
          "validation" : "user name validated"
       })
     }
     else
     {
          response.status(200).json({
               "validation" : "not validated"
          })
     }
})

//which particular address need to be listened
app.listen(8001)
// console will  shown only in terminal for express or node js
// but for js the console.log will be shown in browser console
// console.log('hi')
// console.log('hello')
// npx nodemon server.cjs->running this using nodemon
// nodemon help to avoid restarting the server manually
//npm install body-parser    ==> to fetch the body of request for post