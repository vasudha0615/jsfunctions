//There are 3 types of scoping in javascript
//1.Block scope
//2.Function scope
//3.Global scope

//Block scope
//Block means code access only in braces
//example : {}

//                     var    let      const
//Inside the  block    ☑️     ☑️        ☑️
//Outside the block    ☑️     ❌        ❌


//Inside of block in var

{
    var x = 10;
    var y = 20;
    console.log(x)
    console.log(y)
}

//Inside of block in let

{
    let a = 10;
    let b = 20;
    console.log(a)
    console.log(b)
}

//Inside of block in const

{
    const c = 10;
    const d = 20;
    console.log(c)
    console.log(d)
}

//outside of block in var

{
    var x = 10;
    var y = 20;
}
console.log(x)
    console.log(y)


//outside of block in let
//{
//let num1 = 30;
//let num2 = 40;
//}
//console.log(num1,num2) //error

//ouside of block in const
//{
    //const m1 = 40;
   // const m2 = 50;
//}
//console.log(m1)
//console.log(m2)


//function scope
//                         var    let     const
//Inside the function      ☑️     ☑️      ☑️ 
//Outside of the function   ❌    ❌      ❌  


function s1(){
    var a = 10;
    var b = 20;
    console.log(a,b)
}
s1()

//function s2(){
//  var a = 10;
//var b = 20;

//}console.log(a,b)
//s2()

function s3(){
    let a = 90;
    let b = 20;
    console.log(a,b)
}
s3()

function s4(){
    const a = 50;
    const b = 60;
    console.log(a,b)
} s4()

// //outside of the function
// // function s1()  {
// //     var a = 21;
// //     var b = 17;
// //     console.log(a,b)
// // }
// s1()
// function s2(){
// let a1 = 42;
// let a2 = 654;
// }
// console.log(a1,a2)
// s2
// function s2(){
// const b1 = 6546;
// const b2 = 64;
// console.log(b1,b2)
// }
// s2()

// Global scope

var a = 90;
let b = 30;
const c = 77;
 
console.log(a,b,c)
{
    console.log(a,b,c)
}

function saycheck(){
    console.log(a,b,c)
}
saycheck()