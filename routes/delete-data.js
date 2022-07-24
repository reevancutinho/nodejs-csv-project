const express = require("express");
const router = express.Router();

//get the schema of the database from model
const { policy, agent, user, userAccount,  } = require("../model/model");

//To delete single data from policy collection
router.delete("/policy/:id", async (req, res) => {
    console.log("delete policy with id");
    const id=req.params.id;
    try {
      const data = await policy.deleteOne({_id:id});
      console.log(data);
      res.send(data);
    } catch (e) {
        console.log(e);
      res.send(e);
    }
  });

//To delete single data from agent collection
  router.delete("/agent/:id", async (req, res) => {
    console.log("delete agent with id");
    const id=req.params.id;
    try {
      const data = await agent.deleteOne({policy_id:id});
      console.log(data);
      res.send(data);
    } catch (e) {
        console.log(e);
      res.send(e);
    }
  });

//To delete single data from user collection
  router.delete("/user/:id", async (req, res) => {
    console.log("delete user with id");
    const id=req.params.id;
    try {
      const data = await user.deleteOne({user_id:id});
      console.log(data);
      res.send(data);
    } catch (e) {
        console.log(e);
      res.send(e);
    }
  });

//To delete single data from user-account collection
  router.delete("/user-account/:id", async (req, res) => {
    console.log("delete user-account with id");
    const id=req.params.id;
    try {
      const data = await userAccount.deleteOne({user_acc_id:id});
      console.log(data);
      res.send(data);
    } catch (e) {
        console.log(e);
      res.send(e);
    }
  });


module.exports=router;