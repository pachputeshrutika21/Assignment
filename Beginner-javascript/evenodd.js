/* eslint-disable*/
const butts=document.querySelector('.button');

function clickedNumber()
{
    var no1=parseInt(document.getElementById('n1').value);
    console.log(`value is ${no1}`);

    if(no1%2==0)
    {
        document.getElementById('res').innerHTML=`Number ${no1} is even`;
    }
    else{
        document.getElementById('res').innerHTML=`Number ${no1} is odd`;
    }

}
butts.addEventListener('click',clickedNumber);