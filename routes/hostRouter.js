const express=require('express');
const path = require('path');

const rootDir=require('../utils/pathUtil'); // Assuming pathUtil.js is in the utils folder
const { getaddhome, postaddhome } = require('../controller/hostController');
const hostRouter=express.Router();
hostRouter.use(express.static(path.join(rootDir,'public'))); 
hostRouter.get("/add-home",getaddhome);
hostRouter.use(express.urlencoded()); // to parse the form data
hostRouter.post('/add-home',postaddhome);

module.exports=hostRouter;