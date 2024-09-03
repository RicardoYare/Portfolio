
import { useEffect, useState } from 'react';
import '../css/B1_InitDiv.css';
import { HeaderDiv } from './A2_HeaderDivs.jsx'
import galletaImg1 from '../img/galleta.png'
import galletaImg2 from '../img/galleta2.png'
import galletaImg3 from '../img/galleta3.png'


export function InitDiv({ currentIdioma }) {

    useEffect(() => {

        console.log("init done");

    })

    return (
        <div className='initDiv'>
            <HeaderDiv divTitulo={"initial.main.div"} />
            <Welcome idioma={currentIdioma} />
            <Presentacion idioma={currentIdioma} />
            <Boton idioma={currentIdioma} />
            <GalletaArea idioma={currentIdioma} />
        </div>
    )
}

let intervaloWelcome;

function Welcome({ idioma }) {

    const [mensaje, setMensaje] = useState("");
    let fullText = (idioma == "spanish") ? "¡BIENVENIDOS A MI PORTAFOLIO!" : " WELCOME TO MY PORTFOLIO!";

    let hideSpan = () => {
        let span = document.getElementById("spanWelcome");
        setTimeout(() => {
            span.style.display = "none";
        }, 3000)
    }

    useEffect(() => {
        let span = document.getElementById("spanWelcome");
        span.style.display = "inline";        

        if (intervaloWelcome) {
            clearInterval(intervaloWelcome);
        }
    
        let index = 0;
        let textoAcumulativo = "";

        setTimeout(() => {
            intervaloWelcome = setInterval(() => {      
               
                textoAcumulativo = textoAcumulativo + fullText[index];                     
                setMensaje(textoAcumulativo);           
                index++;
    
                if (textoAcumulativo.length == fullText.length) {                
                    clearInterval(intervaloWelcome);
                }
    
            }, 35)
    
        }, 1000);

        hideSpan();
    }, [fullText]);

    return (
        <div className='welcome'>{mensaje}<span id='spanWelcome'>_</span></div>
    )
}

let intervaloPresent;

function Presentacion({ idioma }) {

    const [mensaje, setMensaje] = useState("");

    let fullTextSpanish = "Mi nombre es Ricardo, y después de 3 años aprendiendo a centrar divs en CSS," +
        " tengo el valor para auto considerarme como todo" +
        " un “Desarrollador Web Junior”. En este portafolio reúno aquellos proyectos que considero" +
        " destacables como prueba de las cosas que puedo hacer y que disfruto haciendo. Estos van" +
        " desde el desarrollo Frontend al Backend. ";

    let fullTextEnglish = "My name is Ricardo, and after 3 years of learning how to center divs in CSS," +
        " I have the confidence to consider myself as a" +
        " 'Junior Web Developer.' In this portfolio, I gather all those projects that I consider" +
        " noteworthy as a proof of the things that I can do and I enjoy doing. These go" +
        " from Frontend to Backend development.";


    let fullText = (idioma == "spanish") ? fullTextSpanish : fullTextEnglish;

    let showSpan = () => {
        let span = document.getElementById("spanPresentacion");
        setTimeout(() => {
            span.style.display = "inline";
        }, 3000)
    }

    useEffect(() => {
        showSpan()
      
        if (intervaloPresent) {
            clearInterval(intervaloPresent);
        }
    
        let index = 0;
        let textoAcumulativo = "";

        setTimeout(() => {
            intervaloPresent = setInterval(() => {      
               
                textoAcumulativo = textoAcumulativo + fullText[index];                 
                setMensaje(textoAcumulativo);           
                index++;
    
                if (textoAcumulativo.length == fullText.length) {                
                    clearInterval(intervaloPresent);
                }
    
            }, 20)
    
        }, 3000);

    }, [fullText]);

    return (
        <div className='presentacion'>{mensaje}<span id='spanPresentacion' style={{ display: 'none' }}>_</span></div>
    )
}

function Boton({ idioma }) {

    function initBot() {
        setTimeout(() => {
            let boton = document.querySelector("#boton");
            boton.style.animation = "animate-slide 1s forwards";
        }, 2000);
    }

    function hoverBoton() {

        let boton = document.querySelector("#boton");

        let width = 0;
        let height = 0;

        boton.style.backgroundSize = `${width}% ${height}%`;

        let crecer;
        let decrecer;

        boton.addEventListener("mouseover", () => { //Crecer

            clearInterval(decrecer);

            crecer = setInterval(() => {

                width = width + 500;
                height = width * 3; //para mantener el ratio en el boton

                boton.style.backgroundSize = `${width}% ${height}%`;

                if (width >= 4000 || height >= 4000) {

                    clearInterval(crecer);
                }

            }, 50);

        });

        boton.addEventListener("mouseout", () => { //Decrecer

            clearInterval(crecer);

            decrecer = setInterval(() => {

                width = width - 500;
                height = width * 3;

                boton.style.backgroundSize = `${width}% ${height}%`;

                if (width <= 0 || height <= 0) {

                    clearInterval(decrecer);
                }

            }, 10);

        });
    }

    function initProjectDiv() {

        let projectDiv = document.querySelector(".projectsDiv");
        let parent = document.querySelector(".mainComponent");

        projectDiv.style.display = "grid";
        projectDiv.style.animation = "pop 1s";
        parent.style.height = "2200px";
        projectDiv.scrollIntoView({ block: "end", behavior: "smooth" });


    }
    //init project div onclick Boton

    useEffect(() => {
        initBot();
        hoverBoton();
    }, [idioma])

    return (
        <div className='botonArea'><div id='boton' onClick={initProjectDiv}>{(idioma == "spanish") ? "Ver Proyectos" : "View Projects"}</div></div>
    )
}


function GalletaArea({ idioma }) {

    let initGalletaArea = () => {
        setTimeout(() => {
            let galleta = document.getElementById("galleta");
            let textGalleta = document.querySelectorAll(".textoGalleta");

            galleta.style.visibility = "visible";
            galleta.style.animation = "popUpGalleta 0.5s";

            galleta.addEventListener("animationend", () => {

                galleta.style.animation = "floatingGalleta 3s infinite";

                textGalleta.forEach(element => {
                    element.style.animation = "animate-slide 1s forwards";
                });
            });

        }, 3500);
    }


    useEffect(() => {
        initGalletaArea();
    }, [])

    return (
        <div className="galletaArea">
            <div className="textoGalleta">{(idioma == "spanish") ? "Galleta de Cortesía (Arrástrala)" : "Courtesy Cookie (Drag It)"}</div>
            <Galleta />
            <div className="textoGalleta textobot">{(idioma == "spanish") ? "Doble Click Para Mordisco" : "Double Click to Bite"}</div>
        </div>
    )
}


function Galleta() {

    let [bites, setBites] = useState(0);
    let [coords , setCoords] = useState(null);

    function currentBites() {
        switch (bites) {
            case 0: return galletaImg1;
            case 1: return galletaImg2;
            case 2: return galletaImg3;
        }
    }

    function bite() {
        let cookie = document.getElementById("galleta");
        let respawn = document.getElementById("extraCookie")

        if (bites == 2) {
            cookie.style.visibility = "hidden";
            respawn.style.visibility = "visible";            
        } else {
            setBites(bites + 1);
        }
    }

    function spawnGalleta() {
        let cookie = document.getElementById("galleta");
        let respawn = document.getElementById("extraCookie");

        setBites(0);
        cookie.style.visibility = "visible"
        cookie.style.left = "initial";
        cookie.style.top = "initial";        
        respawn.style.visibility = "hidden";
    } 

    useEffect(() => { 
        
        let galleta = document.getElementById("galleta");        
        galleta.addEventListener("mousedown", (event) => {

            galleta.style.animation = "none";
        
            let shiftX = event.clientX - galleta.getBoundingClientRect().left;
            let shiftY = event.clientY - galleta.getBoundingClientRect().top;            
        
            function moveAt(pageX, pageY) {
        
                let newX = pageX - shiftX;
                let newY = pageY - shiftY;
                
                let projectDiv = document.querySelector(".projectsDiv");                

                if(newY > 600 && projectDiv.style.display == ""){
                    return;
                }
                if(newY > 2000){
                    return;
                }                   
               
                galleta.style.left = newX + 'px';
                galleta.style.top = newY + 'px';                  
                
            }
        
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
        
            document.addEventListener('mousemove', onMouseMove);
        
            document.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);               
                document.onmouseup = null;   
                galleta.style.animation = "floatingGalleta 3s infinite";            
            };         
        
        });

    }, [])
   

    return (
        <>
            <div id="extraCookie" onClick={spawnGalleta}>Otra Galleta</div>
            <img
                src={currentBites()}
                id="galleta"
                onDoubleClick={bite}
                onDragStart={e => e.preventDefault()}
                onMouseDown={e => {drag(e)}}                
            />
        </>
    )

}