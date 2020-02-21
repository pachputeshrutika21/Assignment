/* eslint-disable*/
// setTimeout(function(){
//     console.log("done!!!"),1000
// });

function buzzer()
{
    console.log("hey!!");
}
// console.log("starting");
// setTimeout(buzzer,1000000000000000000000000000);
// console.log("finishing");
// setInterval(buzzer,200);

function setImediateInterval(funcToRun,ms)
{
funcToRun();
return setInterval(funcToRun,ms);
}
setImediateInterval(buzzer,2000);
function sayHi()
{
    console.log("Hiiiii");
}
// setImediateInterval(sayHi,200);
function destroy()
{
    document.body.innerHTML=`<p>Destryed!</p>`
}
const bomtimer=setTimeout(destroy,200);
console.log(bomtimer);

window.addEventListener('click',function()
{
    console.log(`you clicked you save the world!!!`);
    clearTimeout(bomtimer);
})
const emo=setInterval(function(){
    console.log('😍');
    console.log("cool");
},10)