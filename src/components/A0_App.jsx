import { useEffect, useState } from 'react';
import '../css/A0_MainComponent.css';
import { MainBar } from './A1_MainBar';
import { InitDiv } from './B1_InitDiv';
import { ProjectsDiv } from './B2_ProjectsDiv';
import { Overlay } from './B3_Overlay';

export default function App() {

  let [idioma, setIdioma] = useState("spanish");

  return (
    <div className='mainComponent'>
      <MainBar currentIdioma={idioma} cambioIdioma={setIdioma} />
      <InitDiv currentIdioma={idioma} />
      <ProjectsDiv currentIdioma={idioma} />
      <Overlay currentIdioma={idioma} />
      <Contacto currentIdioma={idioma} />
      <Curriculum currentIdioma={idioma} />
      <div id='mensajeConf'>{(idioma == "spanish") ? "Mensaje Enviado!" : "Message Sent!"}</div>
    </div>
  )
}

function Contacto({ currentIdioma }) {
  return (
    <>
      <div id='overContacto' />
      <div id='contacto'>
        <HeaderContacto />
        <Formulario currentIdioma={currentIdioma} />
      </div>
    </>
  )
}

function HeaderContacto() {

  function cerrar() {

    let contac = document.getElementById("contacto");
    let overContac = document.getElementById("overContacto");

    contac.style.left = "-600px";
    overContac.style.visibility = "hidden";

    let formEmail = document.getElementById("formEmail");
    let formName = document.getElementById("formName");
    let formMensaje = document.getElementById("formMensaje");

    formEmail.value = "";
    formName.value = "";
    formMensaje.value = "";

  }

  return (
    <div id='headerContacto'>
      <div id='closeContact' onClick={cerrar}></div>
      <div id='contactTitulo'>contact.div</div>
      <div className='contactBarGroup'>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
      </div>
    </div>
  )
}

function Formulario({ currentIdioma }) {

  function sent() {
    let confirmacion = document.getElementById("mensajeConf");
    confirmacion.style.visibility = "visible";
    confirmacion.style.animation = "2s conf";
    confirmacion.addEventListener("animationend", () => {

      confirmacion.style.visibility = "hidden";
      confirmacion.style.animation = "none";
    })

    let formEmail = document.getElementById("formEmail");
    let formName = document.getElementById("formName");
    let formMensaje = document.getElementById("formMensaje");

    formEmail.value = "";
    formName.value = "";
    formMensaje.value = "";
  }

  function sendEmail() {  

    let params = {
      nombre: document.getElementById("formName").value,
      email: document.getElementById("formEmail").value,
      mensaje: document.getElementById("formMensaje").value,
    }

    emailjs.send("service_wux1gqk", "template_8q7ujoo", params).then(sent())
  }

  return (
    <form id="formulario">
      <input id="formName" type="text" name="nombre" placeholder={(currentIdioma == "spanish") ? "Nombre (Opcional)" : "Name (Optional)"} />
      <input id="formEmail" type="text" name="email" placeholder={(currentIdioma == "spanish") ? "Email (Opcional)" : "Email (Optional)"} />
      <textarea id="formMensaje" name="mensaje" type="text" placeholder={(currentIdioma == "spanish") ? "Mensaje" : "Message"} />
      <button id="botonForm" type="submit" onClick={(e) => {
        e.preventDefault();
        sendEmail()
      }}>{(currentIdioma == "spanish") ? "Enviar" : "Send"}</button>
    </form>
  )

}


function Curriculum({ currentIdioma }) {

  let arrSpa = [
    "Bachillerato de Ciencias Y Tecnologías",
    "Ciclo Superior Desarrollo de Aplicaciones Multiplataformas",
    "Certificado de Profesionalidad en Desarrollo de Aplicaciones Wev",
    "Certificado de Profesionalidad en Auxiliares de Servicios Administrativas",
    "Acreditación C1 Cambridge Linguaskill",
    "Quitando algunos proyectos freelance, todavía ninguna, pero en ello estamos"
  ]

  let arrEng = [
    "High School Diploma in Science and Technology",
    "Advanced Technical Diploma in Cross-Platform Application Development",
    "Professional Certificate in Web Application Development",
    "Professional Certificate in Administrative Support Services",
    "Cambridge Linguaskill C1 Accreditation",
    "Besides a few freelance projects, none yet, but I am working on it"
  ]


  return (
    <>
      <div id='overCv' />
      <div id='curriculum'>
        <HeaderCv />
        <div className="campo" id='estudios'>
          <div className="area">{(currentIdioma == "spanish") ? "Formación Académica:" : "Academic Background:"}</div>
          <ul className='lista'>
            <li>{(currentIdioma == "spanish") ? arrSpa[0] : arrEng[0]}</li>
            <li>{(currentIdioma == "spanish") ? arrSpa[1] : arrEng[1]}</li>
          </ul>
        </div>
        <div className="campo" id='complem'>
          <div className="area">{(currentIdioma == "spanish") ? "Formación Compelementaria:" : "Additional Training:"}</div>
          <ul className='lista'>
            <li>{(currentIdioma == "spanish") ? arrSpa[2] : arrEng[2]}</li>
            <li>{(currentIdioma == "spanish") ? arrSpa[3] : arrEng[3]}</li>
            <li>{(currentIdioma == "spanish") ? arrSpa[4] : arrEng[4]}</li>
          </ul>
        </div>
        <div className="campo" id='exp'>
          <div className="area">{(currentIdioma == "spanish") ? "Experiencia Laboral en Desarrollo Web:" : "Work Experience in Web Development:"}</div>
          <ul className='lista'>
            <li>{(currentIdioma == "spanish") ? arrSpa[5] : arrEng[5]}<span>_</span></li>
          </ul>
        </div>
      </div>
    </>
  )

}

function HeaderCv() {

  function cerrar() {

    let curriculum = document.getElementById("curriculum");
    let overCv = document.getElementById("overCv");

    curriculum.style.top = "-900px";
    overCv.style.visibility = "hidden";


  }

  return (
    <div id='headerContacto'>
      <div id='closeContact' onClick={cerrar} style={
        {
          marginLeft: "25px"
        }
      }></div>
      <div id='contactTitulo' style={{
        fontSize: "20px"
      }}>curriculum.div</div>
      <div className='contactBarGroup'>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
        <div className='contactBarra'></div>
      </div>
    </div>
  )
}

