/* eslint-disable*/
function handleError(err)
{
    console.log("ohhh! no");
    console.log(err);
}
const basepoint='https://api.github.com';
const endpoint=`${basepoint}/users`;
const userE1=document.querySelectorAll('.user');
async function displayUser(username){


userE1.textContent="loading....";
const response=await fetch(`${endpoint}/${username}`);
const data=await response.json();
    console.log(data);
    console.log(data.blog);
    console.log(data.name);
    console.log(data.location);
    userE1.textContent=`${data.name}-${data.blog}`;
}
//console.log(wespromise);
displayUser('stolinski').catch(handleError);