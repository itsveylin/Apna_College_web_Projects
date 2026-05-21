let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h=document.querySelector("h1");
    let randomColour=getRandomColour();
    h.innerText=randomColour;
    let d=document.querySelector(".box");
    d.style.backgroundColor=randomColour;
});
function getRandomColour(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}
