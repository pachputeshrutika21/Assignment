/* eslint-disable */
import wait from 'waait';
async function go(){
    console.log("going");
    await wait(200);
    console.log("ending");
}
go();