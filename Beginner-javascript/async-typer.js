/* eslint-disable*/
function wait(ms=0){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function getRandomNumberBetween(min=20,max=150,randomNumber=Math.random()){
    return Math.floor(Math.random()*(max-min)+min);
}
async function draw(element)
{
    const text=element.textContent;
    let soFar="";
    for(const letter of text){
        console.log(letter);
        soFar+=letter;
        element.textContent=soFar;
        console.log(element.dataset);
        const {typemin,typemax}=element.dataset;
        async function drawLetter(){
            element.textContent=text.slice(0,index);
            index+=1;
            
        await wait(10);
            if(index <=text.length){
                drawLetter();
            }
        }
        
    }
}
document.querySelectorAll('[data-type]').forEach(draw);