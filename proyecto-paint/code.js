const paint = document.getElementById("canvas");
const pincel = paint.getContext("2d");
const rect = paint.getBoundingClientRect();

let x=0, y=0, dibujo=false, color='color',rango='1';
function defcolor(c){
    color=c;
}

 window.addEventListener("load",()=>{
    paint.width = paint.offsetWidth;    
    paint.height = paint.offsetHeight;
})

function defrango(g){
    rango=g;
}
paint.addEventListener('mousedown',function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujo=true;
 
});

paint.addEventListener('mousemove',function(e){
    if(dibujo===true){
        dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
    }
});
paint.addEventListener('mouseup',function(e){
    if(dibujo===true){
        dibujar(x,y,e.clientX - rect.left,e.clientY - rect.top);
        x=0;
        y=0;
        dibujo=false;
    }
});

function dibujar(x1,y1,x2,y2){
    pincel.beginPath();
    pincel.strokeStyle=color;
    pincel.lineWidth=rango;
    pincel.moveTo(x1,y1);
    pincel.lineTo(x2,y2)
    pincel.stroke();
    pincel.closePath();
}  

var thecolor="";
var linew=5;
let prevX = null;
let prevY = null;
let draw=false;

paint.style.backgroundColor="#ffffff";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function(){
    thecolor = theInput.value;
    paint.style.backgroundColor=thecolor;

},false);

///////olor del pincel
let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr=>{
    clr.addEventListener("click",()=>{
        pincel.strokeStyle=clr.dataset.clr;
    })
})

/////////////limpiar
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click",()=>{
    pincel.clearRect(0,0,canvas.width,canvas.height)
});
////////////////guardar
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click",()=>{
    let data = paint.toDataURL("img/png");
    let a = document.createElement("a");
    a.href= data;
    a.download="sketch.png";
    a.click();
})







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





