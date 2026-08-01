/*=========================================================
    MODAL FORMULARIO
=========================================================*/

const URL_FORMULARIO =
"https://script.google.com/macros/s/AKfycbyptstqQL6OybCj2ZeLwLs9flXYmgTqaJMSYPAM_XGAEiyh0Sx8zJoY3faV9TJXQ4FH/exec";


const modal=document.getElementById("modalFormulario");

const iframe=document.getElementById("iframeFormulario");

const cerrar=document.getElementById("cerrarFormulario");

const abrir=document.getElementById("abrirFormulario");


/*=========================================================
    INICIAR
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    abrir.addEventListener("click",abrirFormulario);

    cerrar.addEventListener("click",cerrarFormulario);

});


/*=========================================================
    ABRIR
=========================================================*/

function abrirFormulario(){

    iframe.src=URL_FORMULARIO;

    modal.classList.add("activo");

    document.body.style.overflow="hidden";

}


/*=========================================================
    CERRAR
=========================================================*/

function cerrarFormulario(){

    modal.classList.remove("activo");

    iframe.src="";

    document.body.style.overflow="auto";

}


/*=========================================================
    CERRAR CON ESC
=========================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        cerrarFormulario();

    }

});


/*=========================================================
    CLICK FUERA
=========================================================*/

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        cerrarFormulario();

    }

});