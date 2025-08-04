const { registeredHomes } = require("./cont1");

exports.errorcont=(req,res)=>{
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'));
    res.render("404",{registeredHomes:registeredHomes,pageTitle:"Error page"});
}