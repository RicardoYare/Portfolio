import '../css/B3_Overlay.css';
import git from '../img/techs/github.png'
import web from '../img/techs/web.png'

export function Overlay() {

    return (
        <>
        <div className="overlay">
            <LatHeader />
            <InfoProyecto/>
        </div>
        <Back />
        </>
    )
}

function LatHeader() {
    return (
        <div className='latHeader'>
            <div className="laticons">
                <div className="circulo"></div>
                <div className="circulo"></div>
                <div className="circulo"></div>
                <div className="circulo"></div>
            </div>
            <div className="lattituloDiv">projects.info.div</div>
            <div className="latbarGroup">
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>
                <div className="barra"></div>                            
            </div>
        </div>
    )
}

function InfoProyecto() {

    return(
        <div id='infoProyecto'>
            <div id='nombreProyecto'></div>
            <video id="videoLat"></video>           
            <div id="boxDescripcion">
                <div id="descripcionProyecto" style={{display: 'inline'}}>               
                </div>
                <span>_</span>
            </div>          
            <div id="linksProyectos">  
                <button id='botGit'>
                    Repositorio 
                    <img id="git" src={git} style={{width: 40+'px' , height: 40+'px', marginLeft: 10+'px'}}/></button>            
                <button id='botWeb'>
                    Web 
                    <img id="web" src={web} style={{width: 40+'px' , height: 40+'px', marginLeft: 10+'px'}}/></button>
            </div>
        </div>
    )
    
}

function Back() {
    
    function hide() {

        let overlayBack = document.querySelector("#back");
        overlayBack.style.visibility = "hidden";

        let PanelLatera = document.querySelector(".overlay");
        PanelLatera.style.right = "-700px";

        if (intervalo) {
            clearInterval(intervalo);    
        }
        
    }   

    return(
        <div id='back' onClick={hide}></div>
    )
}

export function despliegeLateral(element, idioma){

    let PanelLatera = document.querySelector(".overlay");
    PanelLatera.style.right = "-10px";

    let overlayBack = document.querySelector("#back");
    overlayBack.style.visibility = "visible";

    let titulo = document.getElementById("nombreProyecto");    
    titulo.innerHTML = (idioma == "spanish") ? element.nombre : element.nombreIngles;

    let video = document.getElementById("videoLat");
    video.src = element.video;
    video.play();
    video.muted = true;
    video.loop = true;

    loadingDescription((idioma == "spanish") ? element.descripcion : element.descripcionIngles)

    let github = document.getElementById("botGit");
    let weblink = document.getElementById("botWeb");

    if(element.linkGithub == null){   
        
        github.style.opacity = "0%";
        github.style.visibility = "hidden";
        
    }else{
        github.style.opacity = "100%";
        github.style.visibility = "visible";
        github.onclick = function () {
            window.open(element.linkGithub, "_blank");                        
        }
    }

    if(element.linkWeb == null){

        weblink.style.opacity = "0%";
        weblink.style.visibility = "hidden";
    
    }else{
        
        weblink.style.opacity = "100%";  
        weblink.style.visibility = "visible";   
        weblink.onclick = function () {
            window.open(element.linkWeb, "_blank");                        
        }         
    }
    
}

var intervalo
function loadingDescription(description) {    
   
    let descDiv = document.getElementById("descripcionProyecto");
    let index = 0;
    let textoAcumulativo = "";

    if (intervalo) {

        clearInterval(intervalo);

    }
   
    intervalo = setInterval(() => {     

        textoAcumulativo = textoAcumulativo + description[index];            
        descDiv.innerHTML = textoAcumulativo;           
        index++;

        if (textoAcumulativo.length == description.length) {                
            clearInterval(intervalo);
        }

    }, 20)
     
}