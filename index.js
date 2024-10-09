const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const Databaseconnection = require('./Databaseconnection')
const ProblemsModel = require('./ProblemsModel')
 const app = express();
app.use(bodyparser.json())
app.use(cors());
dotenv.config();
Databaseconnection()
app.get("/",async(req,res)=>{
  const entries = await ProblemsModel.find().limit(20);
  res.json(entries)
})
app.post("/",async(req,res)=>{
  const problem = req.body.problem
  const getentry = await ProblemsModel.findOne({
    "problem_name": { $regex: new RegExp(problem, "i") }
  });
  res.json(getentry)  
})
app.listen(process.env.PORT,()=>{
  console.log(`App running on the port ${process.env.PORT}`)
})
