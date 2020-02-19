/* eslint-disable*/
//make div
const div=document.createElement('div');
//add wrapper class
div.classList.add("wrapper");

document.body.appendChild(div);

const ul=`<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

div.innerHTML=ul;
console.log(div);

const img=document.createElement('img');
img.src="nature.jpeg";
img.width=200;
img.classList.add('cute');
img.alt="cute puppy";
div.appendChild(img);