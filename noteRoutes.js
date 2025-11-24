const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const User = require("../models/User");

router.get("/", async (req,res)=>{
  const notes = await Note.find({}).populate("userId","username");
  res.json(notes);
});

router.post("/", async (req,res)=>{
  const {text,userId} = req.body;
  if(!text) return res.status(400).json({error:"Text required"});
  const user = await User.findById(userId);
  if(!user) return res.status(404).json({error:"User not found"});
  const note = await Note.create({text,userId});
  res.json(note);
});

module.exports = router;
