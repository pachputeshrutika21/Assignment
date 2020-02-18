/* eslint-disable*/
const myparagraph=document.createElement('p');
myparagraph.textContent='i am p';
myparagraph.classList.add("spacial");
console.log(myparagraph);

const myimage=document.createElement('img');
myimage.src="teddy.jpeg";
myimage.alt="nice pic";
console.log(myimage);

const mydiv=document.createElement('div');
mydiv.classList.add('special');
console.log(mydiv);

document.body.appendChild(mydiv);
mydiv.appendChild(myimage);
mydiv.appendChild(myparagraph);

//if we add heading

const heading=document.createElement('h2');
heading.textContent="i am in heading!!!!!";
//mydiv.appendChild(heading);
mydiv.insertAdjacentElement('beforebegin',heading);

// <ul>
//     <li>First</li>
//     <li>second</li>
//     <li>third</li>
//     <li>Four</li>
//     <li>Five</li>
// </ul>

const list=document.createElement('ul');
const li=document.createElement('li');
li.textContent="three";
list.appendChild(li);
document.body.insertAdjacentElement('afterbegin',list);

const li2=document.createElement('li');
li2.textContent="two";
list.appendChild(li2);
document.body.insertAdjacentElement('beforebegin',list);

const li1=li2.cloneNode(true);
li1.textContent="one";
list.insertAdjacentElement('afterbegin',li1);