const rootDir = require('../utils/pathUtil');
const path = require('path')
const fs = require('fs');
const Home = require('./home');
const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {
    static addToFavourite(id, callback) {
        Favourite.getFavourites((favourites) => {
            if (favourites.includes(id)) {
                console.log("already in favourites")
            }
            else {
                favourites.push(id);
                fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
            }
            // if(!listhomes.includes(idx)){
            // listhomes.push(idx);
            // fs.writeFile(favouriteDataPath,JSON.stringify(listhomes),()=>{
            //     console.log("data is added in favourites");
            // });
            // }
        })
    }
    static getFavourites(callback) {
        fs.readFile(favouriteDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        })
    }

};