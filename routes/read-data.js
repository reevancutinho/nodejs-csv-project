const express = require("express");
const router = express.Router();

//get the schema of the database from model
const { policy, agent, user, userAccount  } = require("../model/model");

//To read all data from policy collection
router.get("/policy", async (req, res) => {
  console.log("get all policies");
  try {
    const data = await policy.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

//To read single data from policy collection
router.get("/policy/:id", async (req, res) => {
    console.log("get single policy");
    const id=req.params.id;
    try {
      const data = await policy.findOne({_id:id});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

  //To read all data from agent collection
router.get("/agent", async (req, res) => {
    console.log("get all agents");
    try {
      const data = await agent.find();
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });


  //To read single data from agent collection
  router.get("/agent/:id", async (req, res) => {
    console.log("get single agent");
    const id=req.params.id;
    try {
      const data = await agent.findOne({policy_id:id});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });


  //To read all data from user collection
  router.get("/user", async (req, res) => {
    console.log("get all user");
    try {
      const data = await user.find();
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

  //To read single data from user collection
  router.get("/user/:id", async (req, res) => {
    console.log("get single user");
    const id=req.params.id;
    try {
      const data = await user.findOne({user_id:id});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

  //To read all data from user-account collection
  router.get("/user-account", async (req, res) => {
    console.log("get all user accounts");
    try {
      const data = await userAccount.find();
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

    //To read single data from user-account collection
  router.get("/user-account/:id", async (req, res) => {
    console.log("get single user account");
    const id=req.params.id;
    try {
      const data = await userAccount.findOne({user_acc_id:id});
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  });

  module.exports = router