/* eslint-disable*/
// //static methods
// // function createRange(start,end)
// // {
// // const range=Array.from({length:end-start+1},function(item,index)
// // {
// //     return index+start;
// // });
// // return range;
// // }
// // const myRange=createRange(3,7);
// // console.log(Array.isArray(myRange));


// const meats={
//     beyond:10,
//     lick:20,
//     gravy:30
// };
// // console.log(Object.entries(meats));
// // console.log(Object.keys(meats));
// // console.log(Object.values(meats));
// // Object.values(meats).forEach(qty=>
// //     {
// //         console.log(qty);
// //     })

// //     Object.entries(meats).forEach(([key,value])=>
// //         {
// //             // const key=entry[0];
// //             // const value=entry[1];
// //             // const[key,value]=entry
// //             console.log(key,value);
// //         })

// //instance methods

// const buns=["egg","wonder","mango"];
// // console.log(buns.join('or'));
// const foodString="dog are, eat, many bananas";
// console.log(foodString.split(','));
// const bunsLast=buns.pop();
// console.log(bunsLast);

// const toppings=['bananas','mushroom','tomatoes','egggs','milk','butter'];
// const lastItem=toppings.pop();
// console.log(lastItem);

// const firstItem=toppings.shift();
// console.log(firstItem);
// toppings.unshift(firstItem);
// toppings.push(lastItem);

// const toppingCopy=toppings.slice(0);
// console.log(toppingCopy);

// console.log(toppingCopy.splice(3,5));

// const wes={name:'wes'};
// const people=[{name:'bos'},wes];

// //callback methods
// const peoples=[
//     {
//         birthday:'April 21,1999',
//         names:{
//             first:"shrutika",
//             last:"pachpute"
//         }
//     },
//     {
//         birthday:'februwary 21,1998',
//         names:{
//             first:"wes",
//             last:"bos"
//         }
//     },
//     {
//         birthday:'jan 04,2007',
//         names:{
//             first:"shreyash",
//             last:"pachpute"
//         }
//     },
//     {
//         birthday:'march 23,2004',
//         names:{
//             first:"shreya",
//             last:"pachpute"
//         }
//     }
// ];

// const prices={
//     burger:150,
//     pizza:40,
//     sandwitch:50,
//     pavbhaji:80
// };
// const orderTotals=[101,102,103,104,105,106];
// const feedback=[
//     {comment:'love the burger', rating:4},
//     {comment:'spicy pavbhaji',rating:5},
//     {comment:'i dont like',rating:2},
//     {comment:'its awesome',rating:4}
// ];
// //first way
// // function findBurgRating(singleFeedback)
// // {
// // return singleFeedback.comment.includes('burg');

// // }
// //second way
// // const findBurgRating=(function(singleFeedback){
// //     return singleFeedback.comment.includes('burg'); 
// // });
// //third way
// // const findBurgRating=(singleFeedback)=>singleFeedback.comment.includes('burg');
// // const findSpicyRating=(singleFeedback)=>singleFeedback.comment.includes('spicy');
// // const burgRatings=feedback.find(findSpicyRating);
// // console.log(burgRatings);

// // const util={
// //     findBurgRating:function(singleFeedback)
// // {
// //  return singleFeedback.comment.includes('burg');
// //  }
// // }


// function findbyword(word)
// {
//     return function(singleFeedback){
//         return singleFeedback.comment.includes(word);
//     }
// }
// const burgFinder=feedback.find(findbyword('burg'));
// const spicyFinder=feedback.find(findbyword('spic'));
// console.log(burgFinder);
// console.log(spicyFinder);
// function findMinRating(minrating)
// {
// return function(singleFeedback)
// {
//     return singleFeedback.rating>minrating;
// }
// }
// const goodReviews=feedback.filter(findMinRating(2));
//     console.table(goodReviews);

// const burgRat=feedback.filter(findbyword('burg'));
// console.table(burgRat);

// const unFortunate=feedback.filter(single=>single.rating!==3);
// console.table(unFortunate);


// //SOME METHOD
// const isThereOneMeat=Object.values(meats).some(meatValue=>meatValue>=10);
// console.log(isThereOneMeat);
// //every
// const isThereMeat=Object.values(meats).every(meatValue=>meatValue>=1);
// console.log(isThereOneMeat);


// //sort method

// const numberss=[1,2,3,100,4,165,250,300,200];
// const numberSort=numberss.sort(function(firstItems,secondItems)
// {
//     //sort the array
//    // return firstItems-secondItems;
//     // if(firstItems>secondItems)
//     // return 1;
//     // else if(secondItems>firstItems)
//     // return -1;
//     // else
//     // return 0;
//     //reverse the arrray
//     //return secondItems-firstItems;
// });
// console.log(numberSort);
// console.log(toppings.sort());

// // const isSortOrder=(a,b=>a-b);
// // console.log(orderTotals.sort(isSortOrder));

// function isSortOrder(a,b)
// {
//     return a-b;
// }
// console.log(orderTotals.sort(isSortOrder));
// const face=['😁','😍','😃','😁','😍','😸'];

// const productSort=Object.entries(prices).sort(function(a,b)
// {
//     const aPrice=a[1];
//     const bPrice=b[1];
//    // return bPrice-aPrice;
//    return aPrice-bPrice;
// });
// console.table(Object.fromEntries(productSort));

// //looping methods
// function logTopping(topping,index,originalArray)
// {
//     const nextTopping=originalArray[index+1];
//     const prevTopping=originalArray[index-1];
//     prevTopping?console.log(prevTopping):null;
//     // console.log(toppings,index,array);
//     console.log(topping);
//    index===originalArray.length-1?console.log('goodBye'):console.log("getting the next topping");
//    nextTopping?console.log(nextTopping):null;
//    index===originalArray.length&&console.log('goodBye');
//     console.log('----🍕------');

  
// }
// toppings.forEach(logTopping);

// //toppings.forEach(topping=>console.log(topping));;
//   //map,filter ,reduce


// function addArms(face)
// {
//     return `✋ ${face} ✋`;
// }
// const toys=face.map(addArms);
// console.log(toys);

// const bosify=(name=>`${name} bos`);
// const capitalize=(word=>`${word[0].toUpperCase()}  ${word.slice(1)}`);
// const fullName=['wes','bos','poppy'].map(capitalize).map(bosify);
// console.log(fullName);

// const orderTotalsMap=orderTotals.map(total=>total*1.13);
// console.log(orderTotalsMap);



// const cleanPeople=peoples.map(function(person)
// {
//     console.log(person);
//     const birthday=new Date(person.birthday).getTime();
//     console.log(birthday);
//     const now=new Date();
//     const age=Math.floor((now-birthday)/31536000000);
//     console.log(age);
//     return{
//         age,
//         name:`${person.names.first} ${person.names.last}`
//     }
// });
// console.table(cleanPeople);

// const over20=cleanPeople.filter(person=>person.age>20);
// console.table(over20);

// const students=[
//     {
//         id:101,
//         name:'shrutika',
//         last:'pachpute'
//     },
//     {
//         id:102,
//         name:'shreya',
//         last:'pachpute'
//     },
//     {
//         id:103,
//         name:'shreyash',
//         last:'pachpute'
//     }
// ];


// function isById(id)
// {
//     return function isStudent(student1)
//     {
//         return student1.id===id;
//     }
// }
// function findByProp(prop,propWeAreLookingFor)
// {
//     return function isStudent(student1)
//     {
//         return student1[prop]===propWeAreLookingFor;
//     }
// }

// const student1=students.find(isById(101));
// const student2=students.find(findByProp('id','102'));
// console.table(student1);
// console.table(student2);

// //reduce

// function tallyNumbers(tally,currentTotal)
// {

// console.log(`the tally is ${tally}`);
// console.log(`the current total is ${currentTotal}`);
// console.log(`---------`);
// return tally+currentTotal;
// }
// const allOrders=orderTotals.reduce(tallyNumbers,0);
//reduce working
// const arr=[0,1,2,3,4,5,6];
// const reducer=(a,b)=>(a+"="+b);
// console.log(arr.reduce(reducer));

//map working
// const arr=[0,1,2,3,4,5,6];
// const reducer=(a,b)=>(a+b);
// console.log(arr.map(reducer));


//filter working
// const arr=[0,1,2,3,4,5,6];
// const reducer=(a,b)=>(a+b);
// console.log(arr.filter(reducer));

//for of
const name="shrutika";
// for(let i of name){
//     console.log(i);
// }
//for in
// for(let i in name){
//     console.log(i);
// }
//for each

// const name=['shrutika','shreya','shreyash'];

// name.forEach(element => console.log(element));
let person = {
    fullName: function() {
            return this.firstName + ' ' + this.lastName;
    },
};
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
};
let x = person.fullName.call(person1);
let y = person.fullName.apply(person1);
document.getElementById('demo').innerHTML = x;
document.getElementById('demo').innerHTML = y;