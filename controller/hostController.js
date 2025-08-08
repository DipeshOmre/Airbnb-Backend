const Home = require("../model/home");
exports.getaddhome = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','addhome.html'));
    res.render("host/edit-home", {editing:false, pageTitle: 'form page',currentPage:'addHome' })
}
exports.postaddhome = (req, res, next) => {
    const { homeName, location, price, rating, photoUrl} = req.body;
    const h = new Home(homeName, location, price, rating, photoUrl);
    h.save();
    res.render("host/home-added", { pageTitle: "Success page",currentPage: 'Success page'})

}

exports.getHostHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('host/host-home-list', { registeredHomes: registeredHomes, pageTitle: 'host home list', currentPage:'host-homes' })
    });
}
exports.getEditHome=(req, res, next) => {
    const homeId=req.params.homeId;
    const editing=req.query.editing==="true";
    Home.findById(homeId,(homedata)=>{
        if(!homedata){
            console.log("home not found for edit");
            return res.redirect('/host/host-home-list');
        }
        console.log(homeId,editing,homedata);
        res.render("host/edit-home", { home:homedata,editing:editing,pageTitle: 'Edit your Home', currentPage:'addHome' });
    })

}