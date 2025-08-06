const Home = require("../model/home");
exports.getaddhome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','addhome.html'));
    res.render("host/addhome", { pageTitle: 'form page' })
}
exports.postaddhome = (req, res, next) => {
    const { homeName, location, price, rating } = req.body;
    const h = new Home(homeName, location, price, rating);
    h.save();
    // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
    res.render("host/home-added", { pageTitle: "Succes page" })

}
