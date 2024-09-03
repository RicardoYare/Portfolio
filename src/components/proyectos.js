import tabletVideo from '../img/video/tabletList.mp4'
import parallax from '../img/video/parallax.mp4'

export let arrProyectos = [   
	    {
		nombre: "Listado de Pacientes para Tablet",
        nombreIngles: "Patient List App for Tablet",
        video: tabletVideo,
        techs: ["Java", "Sqlite", "Android"],
        descripcion: "Consiste en una simple aplicación de listado pensada para Tablet. Está diseñada para el entorno Android con una implementación"+
        " de SQLite para el almacenamiento de datos. Es ligera y sencilla, y sobretodo me ha servido para aprender a crear mis propias Interfaces de"+ 
        " Usuario en Android Studio.",
        descripcionIngles: "It consists of a simple listing application made for tablets. It is designed for the Android environment with an"+
        " implementation of SQLite for data storage. It is light and simple, and more importantly, it has helped me learn to create my own User"+
        " Interfaces in Android Studio.",
        linkGithub: "https://github.com/RicardoYare/Listing-Pacients-Tablet-App.git",
        linkWeb: null  
	},
    {
		nombre: "Diseño Parallax",
        nombreIngles: "Parallax Design",
        video: parallax,
        techs: ["JavaScript", "HtmlCss"],
        descripcion: "Esto es un mini proyecto hecho por puro entretenimiento en el que intentaba recrear un efecto de 'paralaje' sin echar mano de "+
        " librerias externas, ni de ninguna otra API gráfica cliente de JavaScript. Un simple ejemplo de lo entretenido que puede ser usar solo Vanilla JavaScript"+ 
        " y un poco de CSS.",
        descripcionIngles: "This is a mini project created purely for entertainment, where I attempted to recreate a 'parallax' effect without using external"+
        " libraries or any other JavaScript client-side graphic API. It's a simple example of how fun it can be to use just Vanilla JavaScript and a bit of CSS."
        ,
        linkGithub: "https://github.com/RicardoYare/parallax.git",
        linkWeb: null  
	}   
]