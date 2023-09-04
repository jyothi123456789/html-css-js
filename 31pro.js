let Number =20;
console.log("the number variable is:",numberver);
let stringvar = "hi chancy";
console.log("the string is:",stringvar);
let booleanvar = false;
console.log("the boolean value is:",booleanvar);

//objects
console.log("objects declaretion")
let person={
    studentname:"chancy",
    age:25,
    isstudent:true,
}
console.log(person); 
 
//variables
let a=5;
let b= 7;
let result;

//conditional statements
if(a<b){
    result="a is less than b";
} else if(a>b)
{
    result="a is greater than b";
} 
else
{
    result="a is equal to b";
}

//loops
console.log("even numbers from 1 to 10:");
for(leti=1;i<10;i++){
    console.log(i);//for loop,i incremented1
}

console,log("even numbers from 2 to 15:");
letj =2;
while(ij<13){
    console.log(j);
    j+=2;//increment by2
}

console.log("squares of numbers of numbers from 1 to5:");
let numbers = [3,4,5];//values declared in arrays
for (let num of numbers){
    console.log(num*num);
}
