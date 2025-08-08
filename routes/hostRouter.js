const express=require('express');
const path = require('path');

const rootDir=require('../utils/pathUtil'); // Assuming pathUtil.js is in the utils folder
const { getaddhome, postaddhome, getHostHome, getEditHome, postEditHome, postDeleteHome } = require('../controller/hostController');
const hostRouter=express.Router();
hostRouter.use(express.static(path.join(rootDir,'public'))); 
hostRouter.get("/add-home",getaddhome);
hostRouter.use(express.urlencoded()); // to parse the form data
hostRouter.post('/add-home',postaddhome);
hostRouter.get('/host-home-list',getHostHome);
hostRouter.get('/edit-home/:homeId',getEditHome);
hostRouter.post('/edit-home',postEditHome)
hostRouter.post('/delete-home/:homeId',postDeleteHome)
// query parameter are not part of path
module.exports=hostRouter;