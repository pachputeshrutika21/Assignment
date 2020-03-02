/* eslint-disable*/
import {returnHi as sayHi, last} from './util.js';
import * as everything from './name.js';
import any from './name.js';
import handleButtonClick from './handlers.js';
// console.log(any);
// console.log(everything);
// const name="shrutika";
// console.log(sayHi(name));
// console.log("its working");
// console.log(last);

const button=document.querySelector('button');
button.addEventListener('click',handleButtonClick)