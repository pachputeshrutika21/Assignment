/* eslint-disable */
const item1=document.querySelector('.item');
item1.innerHTML=`<div><h1>Hiii Qliktag</h1></div>`;
console.log(item1.innerHTML);
const width=200;
const src="nature.jpeg";
const desc="Beautiful!!!";
const myhtml=`<div class="wrapper">
<h2>cute <h1>love this guys</h1></h2>
<img src="${src}" alt="${desc}">
</div>`;
item1.innerHTML=myhtml;
console.log(myhtml.classlist);
const itemimg=document.querySelector(".wrapper img");
console.log(itemimg);

const myfragment=document.createRange().createContextualFragment(myhtml);
console.log(myfragment.querySelector('img'));
console.log(myfragment);
document.body.appendChild(myfragment);