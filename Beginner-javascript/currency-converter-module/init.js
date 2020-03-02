/*eslint-disable*/
import {fromselect,toselect} from './elements.js';
import {generateOptions} from './util.js';
import currencies from './currencies.js';
import {handleInput} from './handlers.js';
export function init(){
    const form=document.querySelector('.app form');
const optionsHTML=generateOptions(currencies);
fromselect.innerHTML=optionsHTML;
toselect.innerHTML=optionsHTML;
form.addEventListener('input',handleInput);
}