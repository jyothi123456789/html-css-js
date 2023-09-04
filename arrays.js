
var items =["bag","frock","shirt","watch"];
var coloures = ["red","blue","green","black"];
console.log(items,coloures);

//push
 items =["bag","frock","shirt","watch"];
items.push("saree");
console.log(items);

//pop
 coloures = ["red","blue","green","black"];
coloures.pop ();
console.log(coloures);

//shift  
 items = ["bag","frock","shirt","watch"];
items.shift();
console.log(items);

//index slice
 coloures = ["red","blue","green","black"];
coloures.index =2;
coloures.slice(0,2)
console.log(coloures);

//replace
 coloures = ["red","blue","green","black"];
coloures.splice(1,"pink");
console.log("The splice function replaces the index 1 value with pink ",coloures);

//length
 coloures = ["red","blue","green","black"];
coloures.length();
console.log(coloures);

//sort
 items =["bag","frock","shirt","watch"];
items.sort();
console.log(items);


//tostring
 items =["bag","frock","shirt","watch"];
 stringitems = items.toString();
console.log(stringitems);

//remove
 items =["bag","frock","shirt","watch"];
remove.items()


//join
 items =["bag","frock","shirt","watch"];
items.join(like);
console.log(items);

//concat
 items =["bag","frock","shirt","watch"];
coloures = ["red","blue","green","black"];
joined = items.concat(coloures);
console.log(joined);

//slice2
 coloures = ["red","blue","green","black"];
coloures.slice(1,2,"red1","black1");
console.log(coloures);

//flat
 num = [1,2,3,4,[1,4],5,6];
num = num.flat();
console.log(flat);


//foreach
 coloures = ["red","blue","green","black"];
coloures.forEach((n)=> {
    console.log(n);
});


