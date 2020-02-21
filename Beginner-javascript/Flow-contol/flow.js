/* eslint-disable*/
// const age=prompt("enter age");
// if(age>50)
// {
//     console.log("your are 50 above")
// }
// else
// if(age==50)
// {
//     console.log("your age is 50");
// }
// else
// if(age<50)
// {
//     console.log("less than 50");
// }
// else{
//     console.log("no more");
// }
// function sulgify(sentence,lowercase)
// {
//     if(lowercase)
//     {
//         return sentence.replace('/\s/g','-').toLowerCase();
//     }
    
//         return sentence.replace('/\s/g','-');
//     }
// const name="shrutika";
// const lname="pachpute";
// if(name=="shrutika"&&lname=="pachpute")
// {
//     console.log("cool");
// }

// function isAwesome(name)
// {
//     if(name.includes(name))
//     {
//         console.log(`cool name ${name}`);
//     }
// }

// const score=1;
// if(score)
//     console.log(`Already have`);
//     else
//     console.log("not yet");

//truthy or falsy

// const name=[[],{},-10,1,0,'','full string',' ',undefined,NaN,null];
// console.group("truthy or falsy values");
// name.forEach(element => {
//     if(name)
//     console.log(element,"is truthy");
//     else
//     console.log(element,"is falsy")
// });
// console.groupEnd();

//coersion

// const iscool=true;
// if(iscool)
// console.log("you are cool");
// else
// console.log("not cool");

//ternary

const count=3;
// let word;
// if(count===1)
// word="item";
// else
// word="items";
//1.condition
//2.what to do if true
//3.what to do if false
const word=count==1?"item":"items";
const sentence=`you have ${count} ${word}`;
console.log(sentence);
function showAdminbar()
{
    console.log("i am admin bar");
}
const isAdmin=false;
isAdmin?showAdminbar():null;

function test1()
{
    console.log(`i am test 1`);
    return true;
}
function test2()
{
    console.log(`i am test 2`);
    return true;
}
function test3()
{
    console.log(`i am test 3`);
    return true;
}
if(test1()&&test2()&&test3())
{
    console.log("all are true");
}