/* eslint-disable*/
const myDate=new Date('April 21 1999');
console.dir(myDate);
console.log(myDate.getFullYear());

const span=document.createElement('span');
console.log(span);

function pizza(toppings=[],customer)
{
    this.toppings=toppings;
    this.customer=customer;
    this.slices=10;
    this.size="medium";
    console.log('making a pizza');
}
const pepporaniPizza=new pizza(['pepporani'],'wes bos');
const canadianPizza=new pizza(['canadain','mushrooms'],'kait bos');
console.log(pepporaniPizza);
console.log(pepporaniPizza.constructor);
console.log(pepporaniPizza instanceof pizza);

const button1=document.querySelector('.one');
const button2=document.querySelector('.two');

// function tellMeAboutTheButton(){
//     console.log(this);
//     console.log("outside",this);
//     setTimeout(function(){
//         console.log("inside",this);
//         this.textContent="you clicked me";
//     },1000)
// }
// button1.addEventListener('click',tellMeAboutTheButton);
// button2.addEventListener('click',tellMeAboutTheButton);

pizza.prototype.eat=function(){
    if(this.slices>0)
    {
        this.slices=this.slices-1;
        console.log(`chomp u have ${slices} are left`)
    }
    else{
        console.log(`sorry no slices left`);
    }
}
pizza.prototype