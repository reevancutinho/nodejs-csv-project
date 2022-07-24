const express = require("express");
const router = express.Router();
const csvtojson = require("csvtojson");
const fs = require("fs");
var ObjectID = require("mongodb").ObjectId;

//get the schema of the database from model
const { policy, agent, user, userAccount } = require("../model/model");
// const db=require('./database/db');

//file should be placed in the same directory and name will be entered below
const csvfilepath = "data-sheet.csv";

var data = [];

//GET request to read data from csv and convert it into json and store it in data[]
router.get("/", async (req, res) => {
  console.log("read data from csv");
  try {
    csvtojson()
      .fromFile(csvfilepath)
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          data[i] = json[i];
          //  console.log(json[i].firstname)
        }
     //console.log(data)
      });
      res.send("data has been converted to json");
  } catch (e) {
    console.log(e.message);
  }
});

// router.post("/", async (req, res) => {

//     for(let i = 0; i < data.length; i++) {

//         db.collection("policy").insertOne(data[i],function(err,docsinserted){
//         console.log(docsinserted);

//     });

// }

// });

//push the data to mongodb
router.post("/", async (req, res) => {
  wholeData = [];
  agentData = [];
  userData=[];
  userAcountData=[];
  var new_id;

  try {
    //let counter = 0;
    console.log("importing data started");
    //iterate for all the data
    for (let j = 0; j < data.length; j++) {
      // console.log(data[j]);
      // try {
      //console.log(counter);

      //For policy collection
      await policy.create(
        {
            //generate random id using ObjectID
          _id: new ObjectID(),
          policy_number: data[j].policy_number,
          policy_type: data[j].policy_type,
          policy_start_date: data[j].policy_start_date,
          policy_end_date: data[j].policy_end_date,
        },
        function (err, my_policy_id) {
          if (err) return console.log(err);
          //   res.send(policy);
          //push the data in wholeData array
          wholeData.push(policy);
          
          //store the id in new_id so that we can use the same id for other collections
          new_id = my_policy_id._id;
          console.log("adding ",new_id);
          // console.log("awesome_instance",my_policy_id._id);

          //Function for agent collection
          addAgent(new_id, j);

          //Function for user collection
          addUser(new_id, j);

          //Function for user account collection
          addUserAccount(new_id, j);
        }
      );

      // console.log("yyyyyyyyyyyyyy",new_id[j]);
      //   await agent.create({
      //     policy_id:new_id,
      //     agent: data[j].agent,
      //   },
      //   function (err, id) {
      //     if (err) return handleError(err);
      //     agentData.push(policy);
      //     //res.send(agentData);
      //     // new_id=my_policy_id;
      //     // console.log("awesome_instance",my_policy_id._id);
      //   }
      //   );

      //   console.log(JSON.stringify(policy._id)),
      // console.log("22222",policy[policy_number]);
      //   console.log("11111",res._id);
      //   wholeData.push(policy);
    }
    res.send({ wholeData, agentData, userData, userAcountData });
    console.log("Data saved successfully");
    //res.send(agentData);
    // console.log("this is data ", data1);
    //   console.log(data1[0]._id)

    return "Data saved successfully";
  } catch (e) {
    console.log(e.message, "error");
    res.status(500).send("Error in policy POST");
  }
});

module.exports = router;


function addUserAccount(new_id, j) {
    userAccount.create(
        {
            user_acc_id: new_id,
            account_name: data[j].account_name,
            email: data[j].email,
            account_type: data[j].account_type,
        },
        function (err, id) {
            if (err)
                return handleError(err);
            userAcountData.push(userAccount);
        }
    );
}

function addUser(new_id, j) {
    user.create(
        {
            user_id: new_id,
            firstname: data[j].firstname,
            city: data[j].city,
            phone: data[j].phone,
            address: data[j].address,
            state: data[j].state,
            zip: data[j].zip,
            dob: data[j].dob,
        },
        function (err, id) {
            if (err)
                return handleError(err);
            userData.push(user);
        }
    );
}

function addAgent(new_id, j) {
    agent.create(
        {
            policy_id: new_id,
            agent: data[j].agent,
        },
        function (err, id) {
            if (err)
                return handleError(err);
            agentData.push(agent);
        }
    );
}

