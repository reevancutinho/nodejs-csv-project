const express = require("express");
const router = express.Router();

//get the schema of the database from model
const { policy, agent, user, userAccount,  } = require("../model/model");

//To update single data from policy collection
router.put("/policy/:id", async (req, res) => {
    console.log("update policy with id");
    const id=req.params.id;
    const updateData=req.body;
    try {
      const data = await policy.updateOne({_id:id},{$set:updateData});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });


//To update single data from agent collection
  router.put("/agent/:id", async (req, res) => {
    console.log("update agent with id");
    const id=req.params.id;
    const updateData=req.body;
    try {
      const data = await agent.updateOne({policy_id:id},{$set:updateData});
      res.send(data);
    } catch (e) {
        console.log(e);
      res.send(e);
    }
  });


//To update single data from user collection
  router.put("/user/:id", async (req, res) => {
    console.log("update user with id");
    const id=req.params.id;
    const updateData=req.body;
    try {
      const data = await user.updateOne({user_id:id},{$set:updateData});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

//To update single data from user-account collection
  router.put("/user-account/:id", async (req, res) => {
    console.log("update user account with id");
    const id=req.params.id;
    const updateData=req.body;
    try {
      const data = await userAccount.updateOne({user_acc_id:id},{$set:updateData});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });


module.exports=router;