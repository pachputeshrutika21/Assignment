/* eslint-disable*/
const butt=document.querySelector('.butt');
console.log(butt);
function calculate(first=20,second=30)
{
    var first=parseInt(document.getElementById('first').value);
    var second=parseInt(document.getElementById('second').value);
    document.getElementById('fir').innerHTML=first;
    document.getElementById('sec').innerHTML=second;
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
        if(first==0||second==0)
        {
            alert("enter correct no");
        }
        document.getElementById('result').value=first/second;
    }
    if(operator==='%')
    {
        res=first%second;
      //document.getElementById('res').innerHTML=first%second;
      document.writeln("the modulus is"+first+"and"+second+"is"+res);
    }
    if(first==null)
    {
        alert("plz enter no");
    }
    document.wr
   
    console.log(`first no is::${first}`);
console.log(`second no is::${second}`);
}
butt.addEventListener('click',calculate);