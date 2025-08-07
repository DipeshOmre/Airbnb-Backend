const rootDir = require('../utils/pathUtil');
const path = require('path')
const fs = require('fs');
module.exports = class Home {
    constructor(homeName, location, price, rating) {
        this.homeName = homeName;
        this.location = location;
        this.price = price;
        this.rating = rating;
    }
    save() {
        // const hval=Home.fetchAll();
        // console.log("this is my reg homes in save function");
        // console.log(hval);
        this.id=Math.random().toString();
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const homeDataPath = path.join(rootDir, 'data', 'homes.json');
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
                console.log(err);
            })
        });


    }
    static fetchAll(callback) {
        console.log("in fetch all function");
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (err, data) => {
            callback((!err) ? JSON.parse(data) : []);
        });
    }
};