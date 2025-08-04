const express=require('express');
const path = require('path');
const rootDir=require("../utils/pathUtil"); // Assuming pathUtil.js is in the utils folder
const userRouter=express.Router();
const {registeredHomes}=require('../controller/cont1');
const { gethome } = require('../controller/cont1');
userRouter.use(express.static(path.join(rootDir,'public'))); 
userRouter.get("/",gethome)
module.exports=userRouter;