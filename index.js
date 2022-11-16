const body=document.getElementById('body');
const btn=document.getElementById('btn');

btn.addEventListener('click',color_changer);
function color_changer(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const newrgb=`RGB(${red},${green},${blue})`;

    btn.innerText=newrgb
    body.style.background=newrgb;
    btn.style.background=newrgb
}
