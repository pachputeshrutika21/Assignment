/* eslint-disable */
const jokeButton=document.querySelector('.getJoke');
const jokeHolder=document.querySelector('.joke p');

const buttonText=['omg',
'ohh nice',
'omg dad',
'you are the worst',
'seriously','stop it.',
'please stop',
'that was the worst one'];
async function fetchJoke(){
    const response=await fetch(`https://icanhazdadjoke.com`,{headers:{
        Accept:'application/json',
      
    },
});
    const data=await response.json();
     return data;
}
function randomItemArray(arr,not){
    const item=arr[Math.floor(Math.random()*arr.length)];
    if(item===not){
        console.log(`Ahhh! we used this!!!`);
        return randomItemArray(arr,not);
    }
    return item;
}

async function handleClick(){
    const { joke }=await fetchJoke();
    // console.log(joke);
jokeHolder.textContent=joke;
jokeButton.textContent=randomItemArray(buttonText,jokeButton.textContent);
}
jokeButton.addEventListener('click',handleClick);