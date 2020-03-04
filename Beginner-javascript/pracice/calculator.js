/* eslint-disable */
import { add } from "./addition";
function calculate(){
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
        module(first,second);
        document.getElementById('res').innerHTML=`the modulus ${first} and ${second} is ${total}`;
    }

console.log(`first no is::${first}`);
console.log(`second no is::${second}`);
}