/* eslint-disable*/
// const p=document.querySelector('p');
// const divs=document.querySelectorAll('div');
// const items=document.querySelector('.item');
// const img=document.querySelector('.item img');
// const heading=document.querySelector('h2');
// // console.dir(heading.textContent);
// // console.log(divs);
// // console.log(p);
// // console.log(items);
// // console.log(img);
// heading.textContent='wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzalist=document.querySelector('.pizzas');
// console.log(pizzalist.textContent);
// // pizzalist.textContent=`${pizzalist.textContent} wow!!!`;
// pizzalist.insertAdjacentText('afterbegin','wow');
// pizzalist.insertAdjacentText('beforebegin','wow');
// pizzalist.insertAdjacentText('afterend','wow');
// pizzalist.insertAdjacentText('beforeend','wow');


// //claseeess

// const pic=document.querySelector('.nice');
// console.log(pic.classList);
// pic.classList.add('open');
// pic.classList.remove('cool');
// // pic.classList.add('round');
// pic.classList.toggle('round');
// console.log(pic.classList);
// function toggleRound()
// {
//     pic.classList.toggle('round');
// }
// pic.addEventListener('click',toggleRound);
// pic.alt='Awesome nature';
// pic.width=200;
// console.log(pic.naturallength);
// pic.addEventListener('load',function(){
//     console.log(pic.className);
// })
// pic.setAttribute('alt',"kdkkkkkk");
// console.log(pic.getAttribute('alt'));

const custom=document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click',function(){
    alert(`Welcome ${custom.dataset.name}`);
})