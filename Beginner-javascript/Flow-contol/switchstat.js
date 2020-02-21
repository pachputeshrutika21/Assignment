/* eslint-disable*/
const cat=document.querySelector('.cat');
function handleKeyDown(event)
{
    if(!event.key.includes('Arrow')){ return;}
console.log(event.key);
}
window.addEventListener('keydown',handleKeyDown);