// functions are one of the most powerful features 
// functions are used always like declaration + call 
//syntax
//function declaration
sayHello()
function sayHello(){
    console.log("hello")
}
//function calling
sayHello()
// this is a js hoisting


//functions with parameters
function sum(num1,num2,num3){
    console.log(num1+num2+num3)
} sum(10,5,2)

function sub(num4,num5){
    console.log(num4-num5)
}sub(25,8)
function mul(num6,num7){
    console.log(num6*num7)
}mul(1,17)
function divide(num8,num9){
    console.log(num8/num9)
}divide(17,1)

function add(num10,num11){
    console.log(num10+num11)
}add(44,88)


let fname = "vasudha"
let age = 10

function sayname(){
    console.log(" my name is " + fname + " age is "  + age)
    console.log(' my name is ' + fname + ' age is ' + age)
    console.log(`my name is ${fname} age is ${age}`)
}
//double
//single
//template literal(introduced in es6 after 2015)
sayname()