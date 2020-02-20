/* eslint-disable*/
const butt=document.querySelector('.butt');
console.log(butt);
function calculate(first=20,second=30)
{
    var first=parseInt(document.getElementById('first').value);
    var second=parseInt(document.getElementById('second').value);
    var operator=document.getElementById('operator').value;
    
    if(operator==='+')
    {
        document.getElementById('result').value=first+second;
    }
    if(operator==='-')
    {
        document.getElementById('result').value=first-second;
    }
    if(operator==='*')
    {
        document.getElementById('result').value=first*second;
    }
    if(operator==='/')
    {
        document.getElementById('result').value=first/second;
    }
    if(operator=='%')
    {
        module(first,second);
    }

    if(first==null)
    {
        alert("plz enter no");
    }
   
    console.log(`first no is::${first}`);
console.log(`second no is::${second}`);
}
function module(first,second)
{
    total=first%second;
document.getElementById('res').innerHTML=`the modulus ${first} and ${second} is ${total}`;
}
butt.addEventListener('click',calculate);
