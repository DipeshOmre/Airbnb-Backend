const registeredHomes=[];
const getaddhome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','addhome.html'));
    res.render("addhome", { registeredHomes: registeredHomes, pageTitle: 'form page' })
}
exports.postaddhome = (req, res, next) => {
    registeredHomes.push(req.body);
    console.log(registeredHomes);
    // res.sendFile(path.join(rootDir,'views','homeAdded.html'));
    res.render("homeAdded", { registeredHomes: registeredHomes, pageTitle: "Succes page" })

}
exports.gethome = (req, res, next) => {
    console.log(registeredHomes);

    // res.send("<h1>Welcome to Airbnb</h1><a href='/host/add-home'>Add Home</a>");
    // res.sendFile("C://Users//hp//Documents//Backend//Express concepts//airbnb//views//home.html")
    // res.sendFile(path.join(rootDir,'views','home.html'));
    res.render('home', { registeredHomes: registeredHomes, pageTitle: 'Main page' })
    // res.send("hell")

}
exports.getaddhome = getaddhome;
exports.registeredHomes = registeredHomes