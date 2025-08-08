const rootDir = require('../utils/pathUtil');
const path = require('path')
const fs = require('fs');
const Home = require('./home');
const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {
    static addToFavourite(id, callback) {
        Favourite.getFavourites((favourites) => {
            if (favourites.includes(id)) {
                callback("Home is already in favourites");
            }
            else {
                favourites.push(id);
                fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
            }
        })
    }
    static getFavourites(callback) {
        fs.readFile(favouriteDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        })
    }
    static deleteFavourite(homeId,callback){
        //  fs.readFile(favouriteDataPath, (err, data) => {
        //     const newdt=JSON.parse(data).filter(e=>e!==homeId);
        //     console.log("new data here")
        //     console.log(newdt);
        //     fs.writeFile(favouriteDataPath, JSON.stringify(newdt), callback);
        // })
        Favourite.getFavourites(homeIds=>{
            homeIds=homeIds.filter(e=>e!==homeId);
            fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
        })
        
    }

};