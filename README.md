# nodejs-csv-project

//create a .env file and add and initialize 2 variables MONGO_URI and PORT
MONGO_URI = "url here"
PORT=3000

//Then run below command
npm init

//start the server using below command
node index.js

*****************************************************************************************
CREATE
//Extract data from csv and convert it into JSON.
//In POSTMAN run below url
GET :  http://localhost:3000/import

//add the json to the mongodb using below URL(no body required)
POST : http://localhost:3000/import

*****************************************************************************************
READ
//to get all policies details
GET : http://localhost:3000/read/policy
//to get single policy details (id should be changed)
GET : http://localhost:3000/read/policy/62dd7a240c6fc01d821ff2c9

//to get all agents details
GET : http://localhost:3000/read/agent
//to get single agent details (id should be changed)
GET : http://localhost:3000/read/agent/62dd7a240c6fc01d821ff2c9

//to get all user details
GET : http://localhost:3000/read/user
//to get single user details (id should be changed)
GET : http://localhost:3000/read/user/62dd7a240c6fc01d821ff2c9

//to get all user account details
GET : http://localhost:3000/read/user-account
//to get single user account details (id should be changed)
GET : http://localhost:3000/read/user-account/62dd7a240c6fc01d821ff2c9

*****************************************************************************************
UPDATE
//to update policy add body in the POSTMAN
PUT : http://localhost:3000/update/policy/62dd7a240c6fc01d821ff2cf
body:            key                    value
              policy_type               single
              
//to update agent add body and run
PUT : http://localhost:3000/update/agent/62dd7a240c6fc01d821ff2cf

//to update user add body and run
PUT : http://localhost:3000/update/user/62dd7a240c6fc01d821ff2cf

//to update user-account add body and run
PUT : http://localhost:3000/update/user-account/62dd7a240c6fc01d821ff2cf

*****************************************************************************************
DELETE
//To delete policy, pass id in url and then run
DELETE : http://localhost:3000/delete/policy/62dd7a240c6fc01d821ff2c9

//To delete agent, pass id in url and then run
DELETE : http://localhost:3000/delete/agent/62dd7a240c6fc01d821ff2c9

//To delete user, pass id in url and then run
DELETE : http://localhost:3000/delete/user/62dd7a240c6fc01d821ff2c9

//To delete user-account, pass id in url and then run
DELETE : http://localhost:3000/delete/user-account/62dd7a240c6fc01d821ff2c9

