


const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillStyle='red';
ctx.strokeStyle="pink"
 ctx.lineWidth=2;  
 ctx.shadowOffsetX=10;
 ctx.shadowOffsetY=10;
ctx.shadowBlur=10;
ctx.shadowColor='blue';
let hue = 0;
let drawing=false;
//ctx.globalComponenteOperation='lighter';
function drawShape(x,y,radius,inset,n){
    ctx.fillStyle=/* 'hsl('+hue+',100%,50%)' */'rgb(76, 226, 113)'
    ctx.beginPath();
    ctx.save();
    ctx.translate(x,y)
    ctx.moveTo(0,0-radius);
        for(let i=0;i<n;i++){
            ctx.rotate(Math.PI/n);
            ctx.lineTo(0,0 - (radius*inset));
            ctx.rotate(Math.PI/n);
            ctx.lineTo(0,0 - radius);
}
ctx.restore();
 ctx.closePath(); 
ctx.stroke();
ctx.fill();
}
const radio = 50;
const inset = 0.5;
const n =10;
/* drawShape(120,120,radio*1.45,1,1.5);
drawShape(120,120,radio,inset,n); */
let angle=0;
window.addEventListener('mousemove',function(e){
  
    if (drawing){
        ctx.save();
        ctx.translate(e.x,e.y);

        ctx.rotate(angle);
        drawShape(120,120,radio*0.45,1,1.5);
       hue+=3; 
       angle += 0.1; 
       ctx.rotate(angle*1); 
       drawShape(0,0,radio,inset,n);
    ctx.restore();
}
})
window.addEventListener('mousedown',function (){
    drawing = true;
  
})
window.addEventListener('mouseup',function (){
    drawing = false;
})


let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
});




/////////////////////////
// estos selectores son para el navar menu
const navar = document.querySelector(".con_navar")
const toggle = document.querySelector(".toggle")
// este selcetor es la x
const eq = document.getElementById("equis")

toggle.addEventListener("click",()=>{
    navar.classList.toggle("active")

    let ex =  eq.classList.contains("bi-list")
    if(ex){
        eq.classList.replace("bi-list","bi-x-lg")
    }else{
        eq.classList.replace("bi-x-lg","bi-list")
    }
  

})

// este es para el modo nocturno
const thisBody = document.getElementById("thisBody")
const dark = document.getElementById("dark")

dark.addEventListener("click",()=>{
    let bo = thisBody.classList.contains("boodynoche")
    if(bo){
        thisBody.classList.replace("boodynoche","boodydia")
       }else{
        thisBody.classList.replace("boodydia","boodynoche")
       }
        



   let dar =  dark.classList.contains("bi-sun-fill")
   if(dar){
    dark.classList.replace("bi-sun-fill","bi-moon-fill")
   }else{
    dark.classList.replace("bi-moon-fill","bi-sun-fill")
   }
    
   
   
})


// este es para Contacto toggle

const Contacto = document.getElementById("Contacto");
const contac = document.getElementById("contac")
const closes = document.getElementById("closes")
Contacto.addEventListener("click",()=>{
    contac.classList.toggle("contac")
})
closes.addEventListener("click",()=>{
    contac.classList.remove("contac")
})





