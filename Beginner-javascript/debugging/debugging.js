/* eslint-disable*/
const people=[
    {name:'wes',country:'canada',cool:true},
    {name:'scott' ,country:'america',cool:true},
    {name:'snikkers',country:'jungle',cool:false}
];
people.forEach((people,index)=>{
    // console.log(people.name);
    // console.error(people.name);
    //console.warn(people.name);
   // console.group(people.name);
   console.groupCollapsed(`${people.name}`);
    console.log(people.country);
    console.log(people.cool);
    console.groupEnd();
});
console.table(people);
function group()
{
    console.group(`i am a stuff`);
    console.log(`i am normal statement`);
    console.error(`i am a error`);
    console.warn(`i am a warning`);
    console.groupEnd();
}
function hello(name)
{
    console.count(`running hello for ${name}`);

}