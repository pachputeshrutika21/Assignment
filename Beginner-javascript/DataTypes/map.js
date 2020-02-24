/* eslint-disable*/
const myMap=new Map();
//set
const person1={
    name:"shrutika",
    age:20
};
myMap.set('name','shrutika');
myMap.set(100,"this is a number");
myMap.set(person1,"really cool");
myMap.age=21;
console.log(myMap);
console.log(myMap.get(person1));
const score=300;
const prizes=new Map();
prizes.set(100,"bear");
prizes.set(200,"duck");
prizes.set(300,"car");
console.log(`you win a ${prizes.get(score)}`);

const ul=document.querySelector('.prizes');
for(const [points,prize] of prizes)
{
  const li=`<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend',li);
}