/* eslint-disable */
export function generateOptions(options){
    return Object.entries(options).map(([currencycode,currencyname])=>
       `<option value="${currencycode}">${currencycode}-${currencyname}</option>`
    ).join('');
 }
export function formatCurrency(amount,currency){
    return Intl.NumberFormat('en-US',{
        style:'currency',
            currency,
    }).format(amount);
}