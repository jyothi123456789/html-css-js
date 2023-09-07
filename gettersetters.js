const food = {

    // data property
    firstName: 'dosa',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },
    //accessor property(setter)
        set changename (newname){
            this.firstname =newname;
    }
};

// accessing data property
console.log(food.firstName); 

// accessing getter methods
console.log(food.getName)


// change(set) object property using a setter
food.changename = 'puri';

console.log(food.firstname); 
