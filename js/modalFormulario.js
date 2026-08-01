/*=========================================================
    MODAL FORMULARIO
=========================================================*/

const modal = document.getElementById("modalFormulario");

const iframe = document.getElementById("iframeFormulario");

const abrir = document.getElementById("abrirFormulario");

const cerrar = document.getElementById("cerrarFormulario");


/*=========================================================
    URL DEL FORMULARIO DE APPS SCRIPT
=========================================================*/

const URL_FORMULARIO =
"https://script.google.com/macros/s/AKfycbyptstqQL6OybCj2ZeLwLs9flXYmgTqaJMSYPAM_XGAEiyh0Sx8zJoY3faV9TJXQ4FH/exec";


/*=========================================================
    ABRIR MODAL
=========================================================*/

abrir.addEventListener("click", abrirFormulario);

function abrirFormulario(){

    modal.classList.add("activo");

    iframe.src = URL_FORMULARIO;

}


/*=========================================================
    CERRAR MODAL
=========================================================*/

cerrar.addEventListener("click", cerrarFormulario);

function cerrarFormulario(){

    modal.classList.remove("activo");

    iframe.src = "";

}


/*=========================================================
    CERRAR CON ESC
=========================================================*/

document.addEventListener("keydown", function(e){

    if(e.key==="Escape"){

        cerrarFormulario();

    }

});


/*=========================================================
    CERRAR AL DAR CLICK FUERA
=========================================================*/

modal.addEventListener("click", function(e){

    if(e.target===modal){

        cerrarFormulario();

    }

});


/*=========================================================
    MENSAJE DESDE APPS SCRIPT
=========================================================*/

window.addEventListener("message", function(e){

    if(e.data.accion==="cerrarFormulario"){

        cerrarFormulario();

    }

});