/* eslint-disable*/
//static methods
// function createRange(start,end)
// {
// const range=Array.from({length:end-start+1},function(item,index)
// {
//     return index+start;
// });
// return range;
// }
// const myRange=createRange(3,7);
// console.log(Array.isArray(myRange));


const meats={
    beyond:10,
    lick:20,
    gravy:30
};
// console.log(Object.entries(meats));
// console.log(Object.keys(meats));
// console.log(Object.values(meats));
// Object.values(meats).forEach(qty=>
//     {
//         console.log(qty);
//     })

//     Object.entries(meats).forEach(([key,value])=>
//         {
//             // const key=entry[0];
//             // const value=entry[1];
//             // const[key,value]=entry
//             console.log(key,value);
//         })

//instance methods

const buns=["egg","wonder","mango"];
// console.log(buns.join('or'));
const foodString="dog are, eat, many bananas";
console.log(foodString.split(','));
const bunsLast=buns.pop();
console.log(bunsLast);

const toppings=['bananas','mushroom','tomatoes','egggs','milk','butter'];
const lastItem=toppings.pop();
console.log(lastItem);

const firstItem=toppings.shift();
console.log(firstItem);
toppings.unshift(firstItem);
toppings.push(lastItem);

const toppingCopy=toppings.slice(0);
console.log(toppingCopy);

console.log(toppingCopy.splice(3,5));

const wes={name:'wes'};
const people=[{name:'bos'},wes];

//callback methods

const prices={
    burger:150,
    pizza:40,
    sandwitch:50,
    pavbhaji:80
};
const orderTotals=[101,102,103,104,105,106];
const feedback=[
    {comment:'love the burger', rating:4},
    {comment:'spicy pavbhaji',rating:5},
    {comment:'i dont like',rating:2},
    {comment:'its awesome',rating:4}
];
//first way
// function findBurgRating(singleFeedback)
// {
// return singleFeedback.comment.includes('burg');

// }
//second way
// const findBurgRating=(function(singleFeedback){
//     return singleFeedback.comment.includes('burg'); 
// });
//third way
// const findBurgRating=(singleFeedback)=>singleFeedback.comment.includes('burg');
// const findSpicyRating=(singleFeedback)=>singleFeedback.comment.includes('spicy');
// const burgRatings=feedback.find(findSpicyRating);
// console.log(burgRatings);

// const util={
//     findBurgRating:function(singleFeedback)
// {
//  return singleFeedback.comment.includes('burg');
//  }
// }


function findbyword(word)
{
    return function(singleFeedback){
        return singleFeedback.comment.includes(word);
    }
}
const burgFinder=feedback.find(findbyword('burg'));
const spicyFinder=feedback.find(findbyword('spic'));
console.log(burgFinder);
console.log(spicyFinder);
function findMinRating(minrating)
{
return function(singleFeedback)
{
    return singleFeedback.rating>minrating;
}
}
const goodReviews=feedback.filter(findMinRating(2));
    console.table(goodReviews);

const burgRat=feedback.filter(findbyword('burg'));
console.table(burgRat);

const unFortunate=feedback.filter(single=>single.rating!==3);
console.table(unFortunate);


//SOME METHOD
const isThereOneMeat=Object.values(meats).some(meatValue=>meatValue>=10);
console.log(isThereOneMeat);
//every
const isThereMeat=Object.values(meats).every(meatValue=>meatValue>=1);
console.log(isThereOneMeat);


//sort method

const numberss=[1,2,3,100,4,165,250,300,200];
const numberSort=numberss.sort(function(firstItems,secondItems)
{
    //sort the array
   // return firstItems-secondItems;
    // if(firstItems>secondItems)
    // return 1;
    // else if(secondItems>firstItems)
    // return -1;
    // else
    // return 0;
    //reverse the arrray
    //return secondItems-firstItems;
});
console.log(numberSort);
console.log(toppings.sort());

// const isSortOrder=(a,b=>a-b);
// console.log(orderTotals.sort(isSortOrder));

function isSortOrder(a,b)
{
    return a-b;
}
console.log(orderTotals.sort(isSortOrder));

const productSort=Object.entries(prices).sort(function(a,b)
{
    const aPrice=a[1];
    const bPrice=b[1];
   // return bPrice-aPrice;
   return aPrice-bPrice;
});
console.table(Object.fromEntries(productSort));