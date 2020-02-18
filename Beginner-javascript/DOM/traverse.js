/* eslint-disable*/
const wes=document.querySelector('.wes');
// console.log(wes.children);
// console.log(wes.childNodes);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);


const p=document.createElement('p');
p.textContent="i am removed";
document.body.appendChild(p);
console.log(p);