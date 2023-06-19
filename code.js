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

// esto hace que las imagenes bajen
const contentImagen = document.querySelector(".proup");
const bajarImagen = document.querySelector(".downimg");
contentImagen.addEventListener("mouseover",()=>{
    bajarImagen.classList.toggle("proimg")
})
contentImagen.addEventListener("mouseout",()=>{
    bajarImagen.classList.toggle("proimg")
})

const contentImagen2 = document.querySelector(".proup2");
const bajarImagen2 = document.querySelector(".downimg2");
contentImagen2.addEventListener("mouseover",()=>{
    bajarImagen2.classList.toggle("proimg2")
})
contentImagen2.addEventListener("mouseout",()=>{
    bajarImagen2.classList.toggle("proimg2")
})

const contentImagen3 = document.getElementById("paintt");
const bajarImagen3 = document.querySelector(".paintimg");
contentImagen3.addEventListener("mouseover",()=>{
    bajarImagen3.classList.toggle("garaimg")
})
contentImagen3.addEventListener("mouseout",()=>{
    bajarImagen3.classList.toggle("garaimg")
})

const contentImagen4 = document.getElementById("startt");
const bajarImagen4 = document.querySelector(".startimg");
contentImagen4.addEventListener("mouseover",()=>{
    bajarImagen4.classList.toggle("garaimg")
})
contentImagen4.addEventListener("mouseout",()=>{
    bajarImagen4.classList.toggle("garaimg")
})

//proyecto scroll

const proyecto = document.getElementById("scroll");
proyecto.addEventListener("click",()=>{
    window.scroll(0,500)
})

const about = document.getElementById("about");
about.addEventListener("click",()=>{
    window.scroll(0,1800)
})


// voy a crear salto de lineas a el parrafo del about
const parrafo = document.getElementById("parrafo");








