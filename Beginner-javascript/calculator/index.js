/* eslint-disable */
import { add } from "./addition";
import { sub } from "./substraction";
import { mult } from "./multiplication";
import { div } from "./division";
import { modulus } from "./modulus";

const butts=document.querySelector(".button");  
export function calculate(first=20,second=30)
{
    var first=parseInt(document.getElementById('first').value);
    var second=parseInt(document.getElementById('second').value);
    var operator=document.getElementById('operator').value;

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