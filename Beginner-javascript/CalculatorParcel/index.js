/* eslint-disable */
import { add } from "./addition.js";
import { sub } from "./substraction.js";
import { mult } from "./multiplication.js";
import { div } from "./division.js";
import { modulus } from "./modulus.js";

const butts=document.querySelector(".butts");  
export function calculate()
{
    let first=parseInt(document.getElementById('first').value);
   let second=parseInt(document.getElementById('second').value);
    let operator=document.getElementById('operator').value;

    if(operator==='+')
    {
        add(first,second);
    }
    if(operator==='-')
    {
        sub(first,second);
    }
    if(operator==='*')
    {
        mult(first,second);
    }
    if(operator==='/')
    {
        div(first,second);
    }
    if(operator=='%')
    {
        modulus(first,second);
        document.getElementById('res').innerHTML=`the modulus ${first} and ${second} is ${total}`;
    }

console.log(`first no is::${first}`);
console.log(`second no is::${second}`);
}
butts.addEventListener('click',calculate);