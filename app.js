let timer=60
let hit=0;
let score=0;

function makeBubble()
{
let clutter=' ';
for ( let i=1;i<=234;i++)
{
    let num=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${num}</div>`;
}
 let bub =document.querySelector('#pbottom')
{
    bub.innerHTML=clutter;
}
}

function runTimer()
{
   let timerInterval= setInterval(()=>
    {
        if(timer>0)
        {
            timer--;
            document.querySelector('#timerval').innerText=timer;
        }
        else
        {
            clearInterval(timerInterval);
            document.querySelector('#pbottom').innerHTML=`<h2>GAME OVER!!!<h2>`;
        }
    },1000)
}
function getNewHit()
{
    hit=Math.floor(Math.random()*10) ;
    document.querySelector('#hitval').innerText=hit ;
    
}

function increaseScore()
{
    score=score+10;
    document.querySelector('#scoreval').innerText=score;
}
document.querySelector('#pbottom')
.addEventListener('click',(details)=>
{
   let clickedNum=Number(details.target.innerText);
  if(clickedNum===hit)
  {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();

