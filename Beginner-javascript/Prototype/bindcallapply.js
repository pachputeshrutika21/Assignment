/* eslint-disable*/
const person={
    name:'wes bos',
    sayHi()
    {
        console.log(`hey!! ${this.name}`);
    }
};
const sayHi=person.sayHi.bind({name:'shrutika'});

//QS example

const wrapper=document.querySelector('.wrapper');
const p=wrapper.querySelector('p');
console.log(p);

const bill={
    total:1000,
    calculate:function(taxRate,tipRate){
        console.log(this);
        return this.total+(this.total*taxRate)
    },
    describe(mealType,drinkType,taxRate)
    {
        console.log(`your ${mealType} and ${drinkType} is ${this.calculate.taxRate}`);
    }
}
const total=bill.calculate(0.13);
const calc=bill.calculate.bind({total:500},0.06,0.15);
console.log(calc());
const total2=bill.calculate.call({total:500},0.06,0.15);
console.log(total2);
const total3=bill.calculate.apply({total:500},[0.66],0.15);
console.log(total3);
const myMeal=bill.describe.call(bill,'pizza','bear',0.13);
console.log(myMeal);
const myMeal1=bill.describe.apply(bill,'pizza','bear',[0.13]);
console.log(myMeal1);