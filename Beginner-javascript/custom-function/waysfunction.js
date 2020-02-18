/* eslint-disable*/
// //first way
// // function doctorize(firstname)
// // {
// //     console.log(` Hiii  ${firstname}`);
// // }
// // doctorize('shrutika');
// //Annonymous function

// // function (firstname)

// // {
// //     return `Hello ${firstname}`;
// // }

// //function expression

const doctorize=function(firstname)
{
    console.log(`Hello ${firstname}`);
};

// // //annonymous function
// // const cm=function(inches)
// // {
// //     return inches*1.75;
// // };
// //fat-arrow functiom
 const cm=inches=>inches*2.25;

// // const add=(a,b)=>a+b;

// //returning an object

// // function makebaby(first,last)
// // {
// //     const baby={
// //         name:`${first} ${last}`,
// //         age:0
// //     }
// //     return baby;
// // }

// // const makebaby=(first,last)=>({name:`${first} ${last}`,age:0})

// //IIFE
// (function(age)
// {
//     console.log(`Your age is:${age}`);
// })(10);
//Methods!!!!
const wes={
    name:'wes',
    //first way
    sayHi:function()
    {
console.log('Hiii ws');
    },
    //short-hand
    yess(){
        console.log("i am in shorthand");
    },
    //Arrow function 
    wisperHi:()=>{
        console.log("i am in arrow");
    }
}
const button=document.querySelector('.clickme');
function handleClick(){
    console.log('great clicking!!!!!');
}
button.addEventListener('click',function(){
    console.log("good job!!!!");
});