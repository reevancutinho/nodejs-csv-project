const mongoose = require("mongoose");
const schema = mongoose.Schema;
//var ObjectID = require('mongodb').ObjectId;

const policyScheme = schema({
    _id: {
        type: String,
        required: true,
      },
    policy_number: {
      type: String,
      required: true,
    },
    policy_type: {
      type: String,
      required: true,
    },
    policy_start_date: {
      type: String,
      required: true,
    },
    policy_end_date: {
        type: String,
        required: true,
    },
  });
  
  const policy = mongoose.model("policy", policyScheme);



  const agentScheme = schema({
    policy_id: {
        type: String,
        required: true,
      },
    agent: {
      type: String,
      required: true,
    },
  });
  
  const agent = mongoose.model("agent", agentScheme);



  const userScheme = schema({
    user_id: {
        type: String,
        required: true,
      },
    firstname: {
      type: String,
      required: true,
    },
    city: {
        type: String,
        required: false,
      },
    phone: {
        type: String,
        required: false,
      },
    address: {
        type: String,
        required: false,
      },    
    state: {
        type: String,
        required: false,
      },    
    zip: {
        type: String,
        required: false,
      },    
    dob: {
        type: String,
        required: false,
      },
  });
  
  const user = mongoose.model("user", userScheme);

  const userAccountScheme = schema({
    user_acc_id: {
        type: String,
        required: true,
      },
    account_name: {
        type: String,
        required: false,
      },
    email: {
        type: String,
        required: false,
      },
    account_type: {
        type: String,
        required: false,
      },    
  });
  
  const userAccount = mongoose.model("userAccount", userAccountScheme);


  module.exports = { policy, agent, user, userAccount };