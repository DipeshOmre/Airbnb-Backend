const { addToFavourite, getFavourites } = require("../model/favourites");
const Home = require("../model/home");

exports.gethome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'home-list',currentPage:'Home' })
    });
}
exports.getBookings = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/bookings', { registeredHomes: registeredHomes, pageTitle: 'bookings', currentPage:'bookings' })
    });
}
exports.getFavouriteList = (req, res, next) => {
    // Home.fetchAll((registeredHomes) => {
    //     getFavourites((filt)=>{
    //         const newreg=registeredHomes.filter(element=>(filt.includes(element.id)));
    //         res.render('store/favourite-list', { registeredHomes: newreg, pageTitle: 'favourite-list' })
    //     })
    // });

    // ALSO

    getFavourites((favs)=>{
        Home.fetchAll((registeredHomes)=>{
            const newreg=favs.map(homeId=>registeredHomes.find(home=>home.id===homeId));
            res.render('store/favourite-list', { registeredHomes: newreg, pageTitle: 'favourite-list',currentPage:'favourites' })
        })
    })
}
exports.getIndex = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/index', { registeredHomes: registeredHomes, pageTitle: 'index',currentPage:'index' })
    });

    
}
exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, (homedetail) => {
        if (!homedetail) {
            res.redirect("/homes");
        }
        else {
            res.render('store/home-detail', { homedetail, homeId, pageTitle: 'home-list',currentPage:'Home' })
        }
    })

}
exports.postAddToFavourites=(req, res, next) => {
    addToFavourite(req.body.id,(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/favourites");
    })
}