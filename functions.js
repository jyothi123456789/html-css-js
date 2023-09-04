//function creation
//first use the keyword function,sapareted by name of the parameters within paranthesis.
//the part of the inside the curly braces{} is the body of the function.
//syntax
//function name(parameter1,parameter2,parameter3)
//{
   //code to be executed 
//}

function first()
{
    console.log("the is a function")

    }
    
//function call
//after defining a function,the next step is to call them to make use of the function.
//we can call a function by using the function name separeted by the value of parameters.
//enclosed between the parenthesis and a semicolon at the end.
//syntax:
//functionname(value1,value2,..);
function first(a)
 {
    console.log("this is a function " + a );
}
first("call");

//function return
//syntax:
//return value;
function first(c,d)
{
    console.log("sum ="+(c+d))
    return c+d;
}
const a=30,b=40;
const sum= first(a,b);
console.log(sum);