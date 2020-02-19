/* eslint-disable*/
const bos=document.querySelector('.wes');
bos.addEventListener('click',function(event){
    console.log("you clicked");
    const shouldchange=prompt("you wish to change");
    // console.log(shouldchange);
    if(shouldchange){
        window.location=event.currentTarget.href;   
    }
});
const signup=document.querySelector("[name=signup]");
signup.addEventListener('submit',function(event){
    console.log(event);
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
    if(name.includes('shruti'))
    {
        alert("hiii");
    }
})
console.log(signup);
function logevent()
{
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signup.name.addEventListener('keyup',logevent);
signup.name.addEventListener('keydown',logevent);
signup.name.addEventListener('focus',logevent);
signup.name.addEventListener('blur',logevent);