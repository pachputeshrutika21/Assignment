/* eslint-disable*/
//using doble quotes
const name="Qliktag";
//using single quotes
const name1='qliktag';
//using backtick
const name2=`QLIKtag`;
//using escape
const sentence='she \'s so cool';
//using second option
const sentence2="she's so cool";
//using third option
const sentence3="she's so \"cool\"";
//using backtick
const sentence4=`she's so "cool"`;
//if we take the line in one sentence
const song="yeah!!\
\
i am\
\
pune";
//using backtick they see new line
const song1=`yeah!!
i am in
"pune"`;
//assign value to string
const hello="Hii "+name+" nice to meet u!!!";
//using backtick
let hello1=`HIII ${name}. Nice to meet u!!!!,i am ${20+1} year old`;

const html=`
<h2>${name}</h2>
<p>${hello1}</p>
`;
// console.log(html);
document.body.innerHTML=html;