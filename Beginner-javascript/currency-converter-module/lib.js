/* eslint-disable */

const endPoint='https://api.exchangeratesapi.io/latest';
const ratesByBase={};
export async function fetchRates(base='USD')
{
    const res=fetch(`${endPoint}?base=${base}`);
    const rates=await (await res).json();
    return rates;
}
export async function convert(amount,from,to){
    //if amount is even or not change the currency
    if(!ratesByBase[from]){
    console.log(`oh no! we dont have${from} to convert ${to} so gets it!`);
    const rates=await fetchRates(from);
    console.log(rates);
    ratesByBase[from]=rates;
    }
    const rate=ratesByBase[from].rates[to];
    const convertedAmount=rate*amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}
