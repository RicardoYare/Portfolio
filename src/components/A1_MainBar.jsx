import { useEffect, useState } from 'react';
import '../css/A1_MainBar.css';
import spain from '../img/spain.png';
import uk from '../img/uk.png';


export function MainBar({ currentIdioma, cambioIdioma }) {

  return (
    <div className='mainBar'>
      <BotonIdioma cambiar={cambioIdioma} idioma={currentIdioma} />
      <Contacto currentIdioma = {currentIdioma} />
      <CV />
      <CodePen />      
    </div>
  )
}

function Contacto({currentIdioma}) {

  function contacto() {
    
    let contac = document.getElementById("contacto");
    let overContac = document.getElementById("overContacto");
   
    contac.style.left = ((window.outerWidth / 2)-280)  + "px" ;
    overContac.style.visibility = "visible";

  }

  return (
    <div className='menuBoton' onClick={contacto}>{(currentIdioma == "spanish") ? "Contacto" : "Contact"}</div>
  )
}
function CV() {

  function cv() {
    
    let curriculum = document.getElementById("curriculum");
    let overCv = document.getElementById("overCv");
   
    curriculum.style.top = "50px" ;
    overCv.style.visibility = "visible";

  }

  return (
    <div className='menuBoton' onClick={cv}>Curriculum </div>
  )
}
function CodePen() {
  return (
    <div className='menuBoton' onClick={()=>{window.open("https://codepen.io/RicardoYare", '_blank')}}>CodePen.io</div>
  )
}

let botonDisponible;

function BotonIdioma({ cambiar, idioma }) {

  let [posicion, setPosicion] = useState("49px")

  useEffect(() => {

    let carru = document.getElementById("carru");
    carru.style.left = posicion;

    if (idioma == "spanish") carru.title = "cambiar a inglés";
    if (idioma == "english") carru.title = "switch to spanish";

    botonDisponible = false;

    setTimeout(() => {
      botonDisponible = true;
    }, 3000);
  });

  

  function cambioIdioma() {

    if (!botonDisponible) return;

    if (idioma == "spanish") {
      
      botonDisponible = false; 
      setPosicion("-51px");
      cambiar("english"); 
         
    }

    if (idioma == "english") {

      botonDisponible = false; 
      setPosicion("49px");
      cambiar("spanish");
          
    }

    setTimeout(() => {

      botonDisponible = true;

    }, 3000);
  }

  return (
    <div id='butIdioma' onClick={cambioIdioma}>
      <div id="carru">
        <img src={uk} id="uk" />
        <img src={spain} id="spain" />
      </div>
    </div>
  )
}