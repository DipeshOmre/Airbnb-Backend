const Home = require("../model/home");

exports.gethome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'home-list' })
    });
}
exports.getBookings = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/bookings', { registeredHomes: registeredHomes, pageTitle: 'bookings' })
    });
}
exports.getFavouriteList = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/favourite-list', { registeredHomes: registeredHomes, pageTitle: 'favourite-list' })
    });
}
exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'index' })
    });
}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, (homedetail) => {
        if(!homedetail){

            res.redirect("/homes");
        }
        else{

            console.log("this is our home detail", homedetail)
            res.render('store/home-detail', { homedetail, homeId, pageTitle: 'home-list' })
        }
    })

}