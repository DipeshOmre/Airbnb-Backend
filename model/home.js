const rootDir = require('../utils/pathUtil');
const path = require('path')
const fs = require('fs');
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
    constructor(homeName, location, price, rating, photoUrl) {
        this.homeName = homeName;
        this.location = location;
        this.price = price;
        this.rating = rating;
        this.photoUrl=photoUrl;
    }
    save() {
       
        this.id=Math.random().toString();
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
                console.log(err);
            })
        });


    }
    static fetchAll(callback) {
        fs.readFile(homeDataPath, (err, data) => {
            callback((!err) ? JSON.parse(data) : []);
        });
    }
    static findById(homeId,callback){
        this.fetchAll((homes)=>{
            const homeFound=homes.find((home)=>home.id===homeId);
            callback(homeFound);
        })
    }
};