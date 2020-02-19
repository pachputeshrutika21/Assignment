/* eslint-disable*/
const butts=document.querySelector('.butts');
const cool=document.querySelector('.cool');
const buy=document.querySelectorAll('button.buy');
const photo=document.querySelector('.photo');
photo.addEventListener('mouseenter',e=>{
    console.count(e.currentTarget);
    console.log(this);
})
// function handleClick()
// {
//     console.log("hello!!!!");
// }
// // butts.addEventListener('click',function()
// // {
// // console.log("it got clicked!!");
// // });
// // console.log(butts);
// butts.addEventListener('click',handleClick);
// cool.addEventListener('click',function()
//  {
//  console.log("it got clicked!!");
//  });
//  cool.addEventListener('click',handleClick);
//  butts.removeEventListener('click',handleClick);
//  //multiple
 
//  function buyItem()
//  {
//      console.log('buy items');
//  }
// //  buy.addEventListener('click',buyItem);
// // console.log(buy);
// // console.dir(buy);
// function handleButtonClick(buy)
// {
//     console.log("handled buttons");
// }
// buy.forEach(function(buy){
//     console.log("binding buttons");
//     buy.addEventListener('click',buyItem);
// });
// buy.forEach(handleButtonClick);

function buyItem1(event)
{
//     const button=event.target;
// console.log(button.textContent);
//     console.log("buy items!!!!");
//     console.log(event.target.dataset.price);
console.log(event.currentTarget);
// console.log(event.currentTarget==event.target);
// //stop this event bubbling up
// event.stopPropagation();
}
buy.forEach(function(buy)
{
buy.addEventListener('click',buyItem1)
});
window.addEventListener('click',function(event){
    console.log("you clicked the window!!");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    event.stopPropagation();
},{capture:true
});