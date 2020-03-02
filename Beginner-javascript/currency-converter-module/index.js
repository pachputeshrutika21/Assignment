/* eslint-disable */
import {generateOptions} from './util.js';
import {init} from './init.js';
const app=document.querySelector('.app');
app.addEventListener('mouseenter',init,{once:true});