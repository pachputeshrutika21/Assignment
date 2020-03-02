/*eslint-disable*/
import {convert} from './lib.js';
import {formatCurrency} from './util.js';
import {fromInput,fromselect,toselect,toEl} from './elements.js';
export async function handleInput(e)
{
    const rawAmount=await convert(fromInput.value,fromselect.value,toselect.value);
    // console.log(e.target);
    // console.log(e.currentTarget)    ;
   toEl.textContent=formatCurrency(rawAmount,toselect.value);
}