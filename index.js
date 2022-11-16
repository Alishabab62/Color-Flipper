const body=document.getElementById('body');
const btn=document.getElementById('btn');

btn.addEventListener('click',color_changer);
function color_changer(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const newrgb=`RGB(${red},${green},${blue})`;
    btn.innerText=newrgb;
    body.style.background=newrgb;
    btn.style.background=newrgb;

    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const borderrgb=`RGB(${r},${g},${b})`;
    btn.style.borderColor=borderrgb;

    const rc=Math.floor(Math.random()*256);
    const gc=Math.floor(Math.random()*256);
    const bc=Math.floor(Math.random()*256);
    const colorrgb=`RGB(${rc},${gc},${bc})`;
    btn.style.color=colorrgb;
}
