/* eslint-disable*/
// const person={
//     name:"shrutika",
//     age:20,
//     "7777":true,
//     designation:"software devloper",
//     clothing:{
//         shirts:20,
//         pants:10
//     },
//     sayHi:function(greeting="hey")
//     {
//         return `${greeting} ${this.name}`
//     },
//     sneeze:()=>{
//         console.log("helooooooo",this);
//     }
// };
// console.log(person);
// person.salary=4000000;
// person.age=21;

// const perFroze=Object.freeze(person);
// console.log(person);
// console.log(person.age);
// const propertyCheck=prompt("what do u check??");
// console.log(propertyCheck);
// console.log(person[propertyCheck]); 

// const nameInput=document.querySelector('[name="name"]');
// const name=nameInput.value;
// console.log(name);

let name1="shrutika";
let name2="shrutika";
console.log(name1==name2);
name2='shreya';
console.log(name1===name2);
name2=name1;
console.log(name1===name2);

const person1={
    name:'shrutika',
    lname:'pachpute',
    clothing:{
        shirts:10,
        pants:5
    }
};
const person2={
    name:'shrutika',
    lname:'pachpute'
};

// console.log(person1==person2);

// const person3=person1;
// person3.name="shreya";
// const person3={...person1};
const person3=_.cloneDeep(person1);
person3.name='shreyu';
person3.clothing.shirts=100;

const meatInventary={
    baccon:2,
    sausage:3,
    oysters:10
};
const veggInventary={
    lettus:5,
    tomatoes:3,
    oysters:15
};
const inventory={...veggInventary,...meatInventary};
name1='shruti';
function doStuff(data)
{
    data="something else";
    console.log(data);
}
doStuff(name1);
function doStuff2(data)
{
    data.tomatoes=10000000000;
    console.log(data);
}
console.log(doStuff2(inventory));