/* eslint-disable*/
//crete a new promise
function makePizza(toppings){
    return new Promise(function(resolve,reject){
        if(toppings.include('pinapple'))
        {
            reject('seriously pinnaple???');
        }
        resolve(` here is a 🍕 pizza ${toppings.join('')}`);
    });
    
}
// const cheesePizzaPromise=makePizza(['cheese']);
// const vegPizzaPromise=makePizza(['veg','cheese','paneer']);
// console.log("starting");
// cheesePizzaPromise.then(function(pizza){
//     console.log(`Ahhh!! got it`);
//     console.log(pizza);
// });
// console.log("finishing")
// makePizza(['cheese']).then(function(pizza){
//     console.log("pizza");
//      return makePizza(['panner','cheese'])
// }).then(function(pizza){
//     console.log("pizza");
//     return makePizza(['mushroom','onion','chilli'])
//     }).then(function(pizza){
//         console.log(pizza);
// })
// console.log("right after");

const pizzaPromise1=makePizza(['cheese','paneer','mushroom','onion']);
const pizzaPromise2=makePizza(['one','two','three','four','one','two','three','four','one','two','three','four']);
const pizzaPromise3=makePizza(['paneer','spicy','onion']);
// pizzaPromise1.then(pizza=>{
//     console.log(pizza);
// })
// pizzaPromise2.then(pizza=>{
//     console.log(pizza);
// })
// pizzaPromise3.then(pizza=>{
//     console.log(pizza);
// })
// const dinnerPromise=Promise.all([pizzaPromise1,pizzaPromise2,pizzaPromise3]);
// dinnerPromise.then(function(pizzas){
//     const [hottie,cheese,paneer]=pizzas;
//     console.log(hottie,cheese,paneer);
// });
// const firstPizzaPromise=Promise.race([pizzaPromise1,pizzaPromise2,pizzaPromise3]);

// firstPizzaPromise.then(pizza=>{
//     console.log('you must be hungry,here is the first one ready');
//     console.log(pizza);
// })
makePizza(['cheese','pinapple']).then(pizza=>{
    console.log(pizza);
}).catch(handleError)
function handleError(err){
    console.log('oh no!!');
    console.log(err);
}