const express=require('express');
const path = require('path');
const rootDir=require("../utils/pathUtil"); // Assuming pathUtil.js is in the utils folder
const storeRouter=express.Router();
const { gethome, getBookings, getFavouriteList, getIndex, getHomeDetails } = require('../controller/storeController');
storeRouter.use(express.static(path.join(rootDir,'public'))); 
storeRouter.get("/",getIndex);
storeRouter.get("/bookings",getBookings);
storeRouter.get("/homes",gethome);
storeRouter.get("/favourites",getFavouriteList);
storeRouter.get("/homes/:homeId",getHomeDetails);
module.exports =storeRouter