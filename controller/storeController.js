const Home = require("../model/home");

exports.gethome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'home-list' })
    });

    // res.send("<h1>Welcome to Airbnb</h1><a href='/host/add-home'>Add Home</a>");
    // res.sendFile("C://Users//hp//Documents//Backend//Express concepts//airbnb//views//home.html")
    // res.sendFile(path.join(rootDir,'views','home.html'));

    // res.send("hell")

}
exports.getBookings=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/bookings', { registeredHomes: registeredHomes, pageTitle: 'bookings' })
    });
}
exports.getFavouriteList=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/favourite-list', { registeredHomes: registeredHomes, pageTitle: 'favourite' })
    });
}
exports.getIndex=(req,res,next)=>{
    Home.fetchAll((registeredHomes) => {
        res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'index' })
    });
}