
import '../css/B2_ProjectsDiv.css';
import { HeaderDiv } from './A2_HeaderDivs.jsx'
import { useEffect } from 'react';

//Imagenes de Tecnologías
import All from '../img/techs/all.png'
import JavaScript from '../img/techs/js.png'
import HtmlCss from '../img/techs/htmlcss.png'
import react from '../img/techs/react.png'
import java from '../img/techs/java.png'
import sqlite from '../img/techs/sqlite.png'
import android from '../img/techs/android.png'
///
import { arrProyectos } from './proyectos.js'
import { randomColor } from './randomColor.js'
import { despliegeLateral } from './B3_Overlay.jsx';

////Mini imgs
import atras from '../img/miniButs/atras.png'
import cerrarImg from '../img/miniButs/cerrar.png'
import cuadrado from '../img/miniButs/cuadrado.png'
import jugar from '../img/miniButs/jugar.png'
import minimizar from '../img/miniButs/minimizar-signo.png'
import pausaImg from '../img/miniButs/pausa.png'
import siguiente from '../img/miniButs/siguiente.png'

////

export function ProjectsDiv({ currentIdioma }) {

	return (

		<div className="projectsDiv">
			<HeaderDiv divTitulo={"projects.main.div"} />
			<div id="leyendaTop">{(currentIdioma == "spanish") ? "SELECCIONA UNA TECNOLOGÍA" : "SELECT A TECHNOLOGY"}</div>
			<TechsGroup idioma={currentIdioma} />
			<div id="leyendaRight">{(currentIdioma == "spanish") ? "CLICK EN EL PROYECTO PARA SABER MÁS" : "CLICK ON THE PROJECT TO LEARN MORE"}</div>
			<div id="leyendaLeft">{(currentIdioma == "spanish") ? "RESULTADOS:" : "RESULTS:"}<span id="textSeleccion"></span></div>
			<ProjectsWindow />
		</div>
	)
}

function TechsGroup({ idioma }) {

	return (
		<div id='techsGroup'>
			<Tecnologia idioma={idioma} idTech={"all"} source={All} titulo={"Todos"} />
			<Tecnologia idioma={idioma} idTech={"JavaScript"} source={JavaScript} titulo={"JavaScript"} />
			<Tecnologia idioma={idioma} idTech={"HtmlCss"} source={HtmlCss} titulo={"HTML/CSS"} />
			<Tecnologia idioma={idioma} idTech={"React"} source={react} titulo={"HTML/CSS"} />
			<Tecnologia idioma={idioma} idTech={"Java"} source={java} titulo={"Java"} />
			<Tecnologia idioma={idioma} idTech={"Sqlite"} source={sqlite} titulo={"SQLite"} />
			<Tecnologia idioma={idioma} idTech={"Android"} source={android} titulo={"Android"} />
		</div>
	)
}

function Tecnologia({ idTech, source, titulo, idioma }) {

	function selected(id) {

		let tecnologias = document.querySelectorAll(".selected");
		for (const tech of tecnologias) {
			tech.classList.remove("selected")
		}

		let techSelected = document.getElementById(id);
		techSelected.classList.add("selected");

		updateProjectWindow(id, idioma);
	}

	useEffect(() => {
			
		selected("all");

	}, [idioma])

	return (
		<div className='tecnologia' id={idTech} title={titulo} onClick={() => { selected(idTech) }}>
			<img className='imgTech' src={source}></img>
		</div>
	)
}

function ProjectsWindow() {
	return (
		<div className='projectsWindow'></div>
	)
}


function updateProjectWindow(id, idioma) {

	let projectsWindow = document.querySelector(".projectsWindow");
	projectsWindow.innerHTML = "";

	let leyenda = document.querySelector("#textSeleccion");
	let arrFiltrado;

	if (id == "all") {

		arrFiltrado = arrProyectos.slice();
		leyenda.innerHTML = arrFiltrado.length;

	} else {

		arrFiltrado = arrProyectos.filter((proyecto) => proyecto.techs.some((tech) => tech == id))
		leyenda.innerHTML = arrFiltrado.length;
	}

	arrFiltrado.forEach((element, index) => {

		let proyectoContainer = document.createElement("div");
		proyectoContainer.classList.add("proyectoContainer");

		let proyecto = document.createElement("div");
		proyecto.classList.add("proyecto");


		let miniHeader = document.createElement("div");
		miniHeader.classList.add("miniHeader");
		miniHeader.style.backgroundColor = randomColor();

		let iconoCircle1 = document.createElement("div");
		iconoCircle1.classList.add("circulosMini");
		iconoCircle1.style.backgroundColor = randomColor();

		let iconoCircle2 = document.createElement("div");
		iconoCircle2.classList.add("circulosMini");
		iconoCircle2.style.backgroundColor = randomColor();

		let iconoCircle3 = document.createElement("div");
		iconoCircle3.classList.add("circulosMini");
		iconoCircle3.style.backgroundColor = randomColor();
		iconoCircle3.style.marginRight = "60px";

		miniHeader.appendChild(iconoCircle1);
		miniHeader.appendChild(iconoCircle2);
		miniHeader.appendChild(iconoCircle3);

		let mini = document.createElement("img");
		mini.classList.add("imgHeader");
		mini.src = minimizar;
		let square = document.createElement("img");
		square.classList.add("imgHeader");
		square.src = cuadrado;
		let cerrar = document.createElement("img");
		cerrar.classList.add("imgHeader");
		cerrar.src = cerrarImg;

		miniHeader.appendChild(mini);
		miniHeader.appendChild(square);
		miniHeader.appendChild(cerrar);

		let videoContenedor = document.createElement("div");
		videoContenedor.classList.add("videoContenedor");

		let nombreProject = document.createElement("div");

		nombreProject.innerHTML = (idioma == "spanish") ? element.nombre : element.nombreIngles;
		nombreProject.classList.add("nombreProject");

		videoContenedor.appendChild(nombreProject);

		let video = document.createElement("video");
		video.src = element.video;
		video.muted = true;
		video.classList.add("video");

		videoContenedor.appendChild(video);

		let miniBotones = document.createElement("div");
		miniBotones.classList.add("miniBotones");

		let backbut = document.createElement("img");
		backbut.classList.add("imgReproductor");
		backbut.src = atras;
		let playbut = document.createElement("img");
		playbut.classList.add("imgReproductor");
		playbut.src = jugar;
		let nextbut = document.createElement("img");
		nextbut.classList.add("imgReproductor");
		nextbut.src = siguiente;

		miniBotones.appendChild(backbut);
		miniBotones.appendChild(playbut);
		miniBotones.appendChild(nextbut);

		proyecto.appendChild(miniHeader);
		proyecto.appendChild(videoContenedor);
		proyecto.appendChild(miniBotones);


		proyectoContainer.appendChild(proyecto);

		proyectoContainer.style.animation = "projectPop 1s forwards"
		proyectoContainer.style.animationDelay = 0.1 * index + "s";

		proyecto.addEventListener("mouseover", () => {
			nombreProject.style.opacity = "0%";
			video.play();
			playbut.src = pausaImg;
		})

		proyecto.addEventListener("mouseout", () => {
			nombreProject.style.opacity = "100%";
			video.pause();
			playbut.src = jugar;
		})

		proyecto.addEventListener("click", () => {
			despliegeLateral(element, idioma);
		})

		proyectoContainer.addEventListener("animationend", () => {

			proyectoContainer.style.opacity = "100%";
			proyectoContainer.style.animationDelay = 0;

			let duracion = Math.floor(Math.random() * 9) + 4;
			proyectoContainer.style.animation = `floatingProyecto ${duracion}s infinite`;
		})

		projectsWindow.appendChild(proyectoContainer);

	})
}



