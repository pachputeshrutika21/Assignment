/* eslint-disable*/
const names=['wes','bos','snikkers'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length-1]);

const numbers=[1,2,3,4,5,6,7,8,9];
console.log(numbers);
// 
const num=[...numbers];
num.reverse();
console.log(num);
console.log(numbers);


names.unshift('shruu');
console.log(names);

//const numbers=[1,2,3,4,5,6,7,8,9];

console.log(numbers);
console.log(numbers.slice(6));
console.log(numbers.splice(2,3));

const bikes=['honda','yamaha','hero'];
console.log(bikes);
const bikes2=[...bikes.slice(0,2),'bajaj',...bikes.slice(2)];
console.log(bikes2);

const comments=[
    {text:'cool',id:101},
    {text:'pretty',id:102},
    {text:'beautiful',id:103},
    {text:'nice',id:104}
];
function deleteComments(id,comments)
{
const commentIndex=comments.findIndex(comment=>comment.id===id);
return [...comments(0,commentIndex),
...comments(commentIndex+1),];
}
const serchIndex=names.findIndex(names=>names==="bos");
const withoutBos=[
    ...names.slice(0,serchIndex),...names.slice(serchIndex+1)
];
console.log(withoutBos);
//console.log(serchIndex);
//console.log(comments);