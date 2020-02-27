/* eslint-disable*/
function wait(ms=0){
    return new Promise(resolve=>setTimeout(resolve,ms))
}
async function destroyPopup(popup){
    popup.classList.remove('open');
    await wait(1000);
    popup.remove();
    myPopup=null;
}
function ask(options){
    return new Promise(async function(resolve){
        //create popup
        const popup=document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML("afterbegin",`<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
        </fieldset>`);
        console.log(popup);
        //check cancel
        if(options.cancel){
            const skipButton=document.createElement('button');
            skipButton.type='button';
            skipButton.textContent='Cancel';
            popup.firstChild.appendChild(skipButton);
            skipButton.addEventListener('click',function(){
                resolve();
            },{once:true})
        }
        popup.addEventListener('submit',function(e){
            e.preventDefault();
            console.log("submitted");
            
            resolve(e.target.input.value);
            destroyPopup(popup);
        },{once:true})
        document.body.appendChild(popup);
      await wait(50);
        popup.classList.add('open');

    });
}
async function askQuestion(e){
    const button=e.currentTarget;
    const shouldCancel=button.dataset.cancel;
    console.log(shouldCancel);
    const answer=await ask({title:button.dataset.question,
    cancel:shouldCancel,
    });
    console.log(answer);
}
const buttons=document.querySelectorAll('[data-question]');
buttons.forEach(button=>button.addEventListener('click',askQuestion));

const questions=[
    {title:'what is your name?'},
    {title:'what is your age?',cancel:true},
    {title:'what is your dog name?'},
];

async function asyncMap(array,callback){
    const results=[];
    for(const item of array){
        const result=await callback(item);
        results.push(result);
    }
   return results; 
}
async function go(){
    const answers=await asyncMap(questions,ask);
    console.log(answers);
}
go();
async function askMany(){
    for(const question of questions)
    {
        const answer=await ask(question);
        console.log(answer);
    }
}
askMany();
// questions.forEach(async function(question){
//     console.log('Asking a question');
//     console.log(question);
//     const answer=await ask(question);
//     console.log(answer);
// })

// Promise.all(questions.map(ask)).then(data=>{
//     console.log(data);
// })
// Promise.all([
//     ask(questions[0]),
//     ask(questions[1]),
//     ask(questions[2]),
// ]).then(answers=>{
//     console.log(answers);
// })