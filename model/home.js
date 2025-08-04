const registeredHomes=[];
module.exports=class Home{
    constructor(homeName,location,price,rating){
        this.homeName=homeName;
        this.location=location;
        this.price=price;
        this.rating=rating;
    }
    save(){
        registeredHomes.push(this);
    }
    static fetchall(){
        return registeredHomes;
    }
}