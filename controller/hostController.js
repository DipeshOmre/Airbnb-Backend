const Home = require("../model/home");
exports.getaddhome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','addhome.html'));
    res.render("host/edit-home", { pageTitle: 'form page' })
}
exports.postaddhome = (req, res, next) => {
    const { homeName, location, price, rating, photoUrl} = req.body;
    const h = new Home(homeName, location, price, rating, photoUrl);
    h.save();
    res.render("host/home-added", { pageTitle: "Succes page" })

}

exports.getHostHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('host/host-home-list', { registeredHomes: registeredHomes, pageTitle: 'host home list' })
    });
}
exports.getEditHome=(req, res, next) => {
        console.log(req.params.homeId);
       res.render("host/edit-home", { pageTitle: 'form page' })

}