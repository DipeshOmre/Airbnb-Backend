const registeredHomes=[];
const rootDir=require('../utils/pathUtil');
const path=require('path')
const fs=require('fs');
module.exports=class Home{
    constructor(homeName,location,price,rating){
        this.homeName=homeName;
        this.location=location;
        this.price=price;
        this.rating=rating;
    }
    save(){
        registeredHomes.push(this);
        const homeDataPath=path.join(rootDir,'data','homes.json');
        fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),(err)=>{
            console.log(err);
        })
    }
    static fetchall(){
        return registeredHomes;
    }
}