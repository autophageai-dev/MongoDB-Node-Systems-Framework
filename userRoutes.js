const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req,res)=>{
  const users = await User.find({});
  res.json(users);
});

router.post("/", async (req,res)=>{
  const {username} = req.body;
  if(!username) return res.status(400).json({error:"Username required"});
  const user = await User.create({username});
  res.json(user);
});

module.exports = router;
