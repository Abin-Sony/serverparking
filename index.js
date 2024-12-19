// import json library
const jsonServer = require('json-server')

// create the server
const parkingServer = jsonServer.create()

// middleware to parse the json format
const middleware = jsonServer.defaults()

// setting a path to store data
const router = jsonServer.router('parking.json')

parkingServer.use(middleware)
parkingServer.use(router)

// port for the server
const PORT = 4000 || process.env.PORT

// To listen to the request from the frontend for resolving that request

parkingServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
    
})