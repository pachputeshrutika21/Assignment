/* eslint-disable*/
const baseEndpoint="http://www.recipepuppy.com/api";
const proxy=`https://cors-anywhere.herokuapp.com/`;
const form=document.querySelector('form.search')
async function fetchRecipes(query){
    const res=await fetch(`${proxy} ${baseEndpoint}?q=${query}`);
    const data=await res.json();
    return data;
}
function handleSubmit(event)
{
    event.preventDefault();
    const el=event.currentTarget;
    el.submit.disabled=true;
    fetchRecipes(el.query.value);
    console.log(el.query.value);
}
form.addEventListener('submit',handleSubmit);
fetchRecipes('pizza');