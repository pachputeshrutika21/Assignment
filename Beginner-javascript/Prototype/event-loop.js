/* eslint-disable*/
const wait=(ms=0)=>new Promise((resolve)=>setTimeout(resolve,ms));

wait(200).then(()=>{
    console.log("Done!!");
})
console.log("starting");
setTimeout(function(){
    console.log("running")
},2000);
setInterval(function(){
    console.log("running")
},2000);
console.log("ending");

const go=document.querySelector('.go');
function animate(e){
    const el=e.currentTarget;
    el.textContent='GO';
    wait(200).then(()=>{
        el.classList.add('circle');
    })
}
go.addEventListener('click',animate)
go.addEventListener('click',function(e){
    const el=e.currentTarget;
    el.textContent="Go!";
    console.log(el);
    setTimeout(function(){
        el.classList.add('circle');
    },2000)
});