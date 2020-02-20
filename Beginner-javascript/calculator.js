/* eslint-disable*/
const butt=document.querySelector('.butt');
console.log(butt);
function calculate(first=20,second=30)
{
    var first=parseInt(document.getElementById('first').value);
    var second=parseInt(document.getElementById('second').value);
    var operator=document.getElementById('operator').value;
    const add=(first,second)=>{
        document.getElementById('result').value=first+second;
    }
    const sub=(first,second)=>{
        document.getElementById('result').value=first-second;
    }
    const mult=(first,second)=>{
        document.getElementById('result').value=first*second;
    }
    const div=(first,second)=>{
        document.getElementById('result').value=first/second;
    }
    function module(first,second)
    {
        total=first%second;
        document.getElementById('res').innerHTML=`the modulus ${first} and ${second} is ${total}`;
    }
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
    }

console.log(`first no is::${first}`);
console.log(`second no is::${second}`);
}
butt.addEventListener('click',calculate);
