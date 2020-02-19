/* eslint-disable*/
const butt=document.querySelector('.butt');
function calculate()
{
    var first=parseInt(document.getElementById('first').value);
    console.log(first);
    var second=parseInt(document.getElementById('second').value);
    console.log(second);
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

}
butt.addEventListener('click',calculate);