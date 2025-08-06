const Home = require("../model/home");

exports.gethome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'home-list' })
    });
}
exports.getBookings=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/bookings', { registeredHomes: registeredHomes, pageTitle: 'bookings' })
    });
}
exports.getFavouriteList=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/favourite-list', { registeredHomes: registeredHomes, pageTitle: 'favourite-list' })
    });
}
exports.getIndex=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'index' })
    });
}