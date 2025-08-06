const Home = require("../model/home");
const getaddhome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','addhome.html'));
    res.render("addhome", { pageTitle: 'form page' })
}
exports.postaddhome = (req, res, next) => {
    const { homeName, location, price, rating } = req.body;
    const h = new Home(homeName, location, price, rating);
    h.save();
    // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
    res.render("homeAdded", { pageTitle: "Succes page" })

}
exports.gethome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('home', { registeredHomes: registeredHomes, pageTitle: 'Main page' })
    });

    // res.send("<h1>Welcome to Airbnb</h1><a href='/host/add-home'>Add Home</a>");
    // res.sendFile("C://Users//hp//Documents//Backend//Express concepts//airbnb//views//home.html")
    // res.sendFile(path.join(rootDir,'views','home.html'));

    // res.send("hell")

}
exports.getaddhome = getaddhome;