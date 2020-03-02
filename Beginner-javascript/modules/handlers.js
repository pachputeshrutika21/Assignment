/* eslint-disable*/
// import currencies from "./currency.js";
// export default function handleButtonClick(event){
//     console.log(currencies);
// }
export default async function handleButtonClick(event){
    const currencies=await import('./currency.js');
    console.log(currencies.default);
}
