const food = {
    firstname :"dosa",
    //accessor property(setter)
    set changename (newname){
        this.firstname =newname;
    }
}



console.log(food.firstname); 

// change(set) object property using a setter
food.changename = 'puri';

console.log(food.firstname); 