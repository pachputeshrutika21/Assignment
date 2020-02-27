/* eslint-disable*/
console.log("it works")
function wait(ms=0)
{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
// console.log("one");
// await wait(200);
// console.log("two");
async function go()
{
    console.log("starting");
     await wait(2000);
    console.log("ending");
}
go();
async function makeDinner(){
    const pizza1=await makePizza(['cheese']);
    console.log(pizza1);
}
// //function declaration
// async function fd(){}

// //arrow function
// const arrowFunc=async()=>{}

// //callback
// window.addEventListener('click',async function(){

// })
// //method
// const person={
//     sayHi:async function(){

//     },
//     //method shorthand
//     async sayHello(){

//     },
//     //function property
//     sayHey:async()=>{

//     }
//}
