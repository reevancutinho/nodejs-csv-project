const express =require('express');
const cors = require("cors");
const bodyparser=require('body-parser');
const dotenv =require("dotenv");
dotenv.config();

//const addData = require("./routes/add-csv");
const connectDB=require('./database/db');
const addData = require("./routes/add-csv");
const readData = require("./routes/read-data");
const updateData = require("./routes/update-data");
const deleteData=require("./routes/delete-data")

const app=express();

app.use(cors());

//mongodb connection
connectDB();

//parse requests to body parser
app.use(bodyparser.urlencoded({extended:true}))

//start the port at given port number
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
});


app.get("/", (req, res) => {
    res.send("project is connected");
  });

//API endpiont to to read data from csv and store it in MOongoDB
app.use("/import", addData);

//API endpiont to read data from mongodb
app.use("/read", readData);

//API endpiont to update data
app.use("/update", updateData);

//API endpiont to delete data
app.use("/delete", deleteData);




// const csvtojson=require('csvtojson');
// const fs=require('fs');

// const csvfilepath="data-sheet.csv";

// var data=[];

// csvtojson().fromFile(csvfilepath).then((json)=>{
//   console.log(json[1]);  
// })

//console.log(data);