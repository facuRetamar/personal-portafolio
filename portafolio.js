const divPrimero = document.querySelector(".div-header")
const disparador = document.querySelector(".disparador")
const textoAbout = document.querySelector(".texto_about-me")
const imagenPortada = document.querySelector(".img-portada")
const imagenAbout = document.querySelector(".about-me_img")
const intro = document.querySelector(".parrafo-header")
const proyecto1 = document.querySelector(".stock")
const proyecto2 = document.querySelector(".color")
const proyecto3 = document.querySelector(".piedra")
const proyecto4 = document.querySelector(".to-do")
const proyecto5 = document.querySelector(".tree")
const proyecto6 = document.querySelector(".calculadora")
const proyecto7 = document.querySelector(".temporizador")
const proyecto8 = document.querySelector(".weather")
const proyecto9 = document.querySelector(".sorteo")
const seccion = document.querySelector(".about_me")
const navegadores = document.querySelectorAll(".LI")
const menu = document.querySelector(".menu")
const seccionHome = document.querySelector(".header")
const seccionTecnologias = document.querySelector(".tecnologias")
const seccionProyectos = document.querySelector(".proyectos")
const seccionfooter = document.querySelector(".footer")
const UL = document.querySelector(".UL")
const navHome = document.querySelector(".nav-home")
const navAbout = document.querySelector(".nav-about")
const navSkills = document.querySelector(".nav-skills")
const navProyects = document.querySelector(".nav-proyects")
const navContact = document.querySelector(".nav-contact")

    
menu.addEventListener("click", ()=>{
  UL.classList.toggle("ULescondida")
})



function calesita(proyectoACambiar, indiceImagen){
  let indice = 0
  let project = proyectoACambiar

  setInterval(() => {
    project.style.background = "url(/imagenes"+ indiceImagen + "/imagen" + indice + ".png)"
    project.style.backgroundPosition = "center"
    project.style.backgroundSize = "cover"
    project.style.transition = ".3s"
  
    if(indice < 2){
      indice++
    }else{
      indice = 0
    }
  }, 3000);
 
  
}

calesita(proyecto1, 0)
calesita(proyecto2, 1)
calesita(proyecto3, 2)
calesita(proyecto4, 3)
calesita(proyecto5, 4)
calesita(proyecto6, 5)
calesita(proyecto7, 6)
calesita(proyecto9, 7)


document.addEventListener("DOMContentLoaded", ()=>{
  divPrimero.classList.remove("div-header_escondido")
  divPrimero.innerHTML= ""
  intro.classList.remove("parrafo-header_escondido")

  setTimeout( ()=>{
      loop ()
  }, 2000)
 
} )


const phrases = ["Hi there. Facundo Retamar here.", "I love web developement.", "Wanna see what I've been working on?..."]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  divPrimero.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      divPrimero.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      divPrimero.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (40 -20) + 20
  const normalSpeed = Math.random() * (80 - 50) + 50
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}


function cargarElementos(entradas){
  entradas.forEach(entrada => {
    if(entrada.isIntersecting && entrada.target.classList.contains("escondido1")){
      entrada.target.classList.remove("escondido1")
    }else if(entrada.isIntersecting && entrada.target.classList.contains("escondido2")){
      entrada.target.classList.remove("escondido2")
    }else if(entrada.isIntersecting && entrada.target.classList.contains("escondido3")){
      entrada.target.classList.remove("escondido3")
    }else if(entrada.isIntersecting && entrada.target.classList.contains("escondido4")){
      entrada.target.classList.remove("escondido4")
    }
  });
  
   
}

const observer = new IntersectionObserver(cargarElementos, {
    root: null,
    rootMargin: "0px",
    threshold: .3,
}) 

const observer2 = new IntersectionObserver(empezarAnimacion, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
}) 


const observer3 = new IntersectionObserver(hoverEfect, {
  root: null,
  rootMargin: "0px",
  threshold: .2,
}) 

function empezarAnimacion(entries){
  entries.forEach(ent=>{
    if(ent.isIntersecting){
      disparador.classList.add("animacion_titulo")
      textoAbout.classList.add("animacion_texto")
      imagenAbout.classList.add("animacion_imagen")
    }
  })
}


function hoverEfect(entries){
  entries.forEach( entrie=>{
    if(entrie.isIntersecting && entrie.target.classList.contains("header")){
      navHome.classList.add("ULactiva")
    }else if(!entrie.isIntersecting && entrie.target.classList.contains("header")){
      navHome.classList.remove("ULactiva")
    }
    if(entrie.isIntersecting && entrie.target.classList.contains("about_me")){
      navAbout.classList.add("ULactiva")
    }else if(!entrie.isIntersecting && entrie.target.classList.contains("about_me")){
      navAbout.classList.remove("ULactiva")
    }
    if(entrie.isIntersecting && entrie.target.classList.contains("tecnologias")){
      navSkills.classList.add("ULactiva")
    }else if(!entrie.isIntersecting && entrie.target.classList.contains("tecnologias")){
      navSkills.classList.remove("ULactiva")
    }
    if(entrie.isIntersecting && entrie.target.classList.contains("proyectos")){
      navProyects.classList.add("ULactiva")
    }else if(!entrie.isIntersecting && entrie.target.classList.contains("proyectos")){
      navProyects.classList.remove("ULactiva")
    }
    if(entrie.isIntersecting && entrie.target.classList.contains("footer")){
      navContact.classList.add("ULactiva")
    }else if(!entrie.isIntersecting && entrie.target.classList.contains("footer")){
      navContact.classList.remove("ULactiva")
    }
  
})}


observer2.observe(seccion)

observer.observe(proyecto1)
observer.observe(proyecto2)
observer.observe(proyecto3)
observer.observe(proyecto4)
observer.observe(proyecto5)
observer.observe(proyecto6)
observer.observe(proyecto7)
observer.observe(proyecto8)
observer.observe(proyecto9)


observer3.observe(seccionfooter)
observer3.observe(seccionProyectos)
observer3.observe(seccionTecnologias)
observer3.observe(seccionHome)
observer3.observe(seccion)

navegadores.forEach( nav=>{
  nav.addEventListener("mouseenter", ()=>{
    nav.classList.add("ULactiva")
  })
  nav.addEventListener("mouseleave", ()=>{
    nav.classList.remove("ULactiva")
  })
  nav.addEventListener("click", ()=>{
    UL.classList.toggle("ULescondida")
  })
} )
