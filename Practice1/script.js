let image=document.querySelector(".Slider_image");
let translate=0;

setInterval(()=>
{
    if(translate>=0 && translate<500){
        translate+=100;
    }
    else{
        translate=0;
    }
    image.style.transition="2s";
     image.style.transform=`translatex(${-translate}%)`
},3000)

function right(){
    if(translate< 400){
        translate+=100
        image.style.transition="1s";
        image.style.transform=`translatex(${-translate}%)`  
    }
}
function left(){
    if(translate< 0){
        translate-=100
        image.style.transition="1s";
        image.style.transform=`translatex(${-translate}%)`  
    }
}