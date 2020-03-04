/* eslint-disable*/
const user=[];
const basePoint="https://api.github.com";
const endPoint=`${basePoint}/users`;
async function getData(){
    const response=await fetch(`${endPoint}`);
    const data=response.json();
    user.push(data);
    console.log(user);
}
