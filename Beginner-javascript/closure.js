/* eslint-disable*/
function outer()
{
    const out="i am in outer function!!";
    function inner()
    {
        const inn="i am in inner function";
        console.log(out);
        console.log(inn);
    }
    inner();
}
outer();

function createGame(gamename)
{
let score=0;
return function win()
{
    score++;
    return `your game name is ${gamename} score is ${score}`;
}
}
const hockeygame=createGame('hockey');
const soccergame=createGame('soccer');