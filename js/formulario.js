/*==========================================================
    FORMULARIO v2.0
    Gloria 55
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalConfirmacion");
    const abrir = document.getElementById("abrirFormulario");
    const cerrar = document.getElementById("btnCancelar");
    const enviar = document.getElementById("btnEnviar");

    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");

    const adultos = document.getElementById("adultos");
    const ninos = document.getElementById("ninos");

    const siAsiste = document.getElementById("asisteSi");
    const noAsiste = document.getElementById("asisteNo");

    /*----------------------------------
        Verificación
    -----------------------------------*/

    if (!modal || !abrir || !cerrar || !enviar) {

        console.error("No se encontraron los elementos del formulario.");

        return;

    }

    /*----------------------------------
        Abrir
    -----------------------------------*/

    abrir.addEventListener("click", () => {

        modal.classList.add("activo");

        document.body.style.overflow = "hidden";

        nombre.focus();

    });

    /*----------------------------------
        Cerrar
    -----------------------------------*/

    cerrar.addEventListener("click", cerrarModal);

    function cerrarModal() {

        modal.classList.remove("activo");

        document.body.style.overflow = "auto";

    }

    /*----------------------------------
        Click fuera
    -----------------------------------*/

    modal.addEventListener("click", function (e) {

        if (e.target === modal) {

            cerrarModal();

        }

    });

    /*----------------------------------
        ESC
    -----------------------------------*/

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            cerrarModal();

        }

    });

    /*----------------------------------
        Contadores
    -----------------------------------*/

    document.querySelectorAll(".sumar").forEach(btn => {

        btn.addEventListener("click", () => {

            let campo = document.getElementById(btn.dataset.campo);

            let valor = parseInt(campo.value);

            if (valor < 10) {

                campo.value++;

            }

        });

    });

    document.querySelectorAll(".restar").forEach(btn => {

        btn.addEventListener("click", () => {

            let campo = document.getElementById(btn.dataset.campo);

            let minimo = campo.id === "adultos" ? 1 : 0;

            let valor = parseInt(campo.value);

            if (valor > minimo) {

                campo.value--;

            }

        });

    });

    /*----------------------------------
        Asistencia
    -----------------------------------*/

    function actualizarEstado() {

        if (noAsiste.checked) {

            adultos.value = 0;

            ninos.value = 0;

            adultos.disabled = true;

            ninos.disabled = true;

        }
        else {

            adultos.disabled = false;

            ninos.disabled = false;

            if (adultos.value == 0) {

                adultos.value = 1;

            }

        }

    }

    siAsiste.addEventListener("change", actualizarEstado);

    noAsiste.addEventListener("change", actualizarEstado);

    /*----------------------------------
        Enviar
    -----------------------------------*/

    enviar.addEventListener("click", function () {

        if (nombre.value.trim() === "") {

            alert("Por favor escribe tu nombre.");

            nombre.focus();

            return;

        }

        enviar.disabled = true;

        enviar.innerHTML = "Enviando...";

        const datos = {

            nombre: nombre.value.trim(),

            asistencia: siAsiste.checked ? "SI" : "NO",

            adultos: adultos.value,

            ninos: ninos.value,

            mensaje: mensaje.value.trim()

        };

        console.table(datos);

        /*===================================
            AQUÍ irá el fetch()
        ===================================*/

   const formData = new URLSearchParams();

formData.append("nombre", datos.nombre);
formData.append("asistencia", datos.asistencia);
formData.append("adultos", datos.adultos);
formData.append("ninos", datos.ninos);
formData.append("mensaje", datos.mensaje);

fetch("https://script.google.com/macros/s/AKfycbyptstqQL6OybCj2ZeLwLs9flXYmgTqaJMSYPAM_XGAEiyh0Sx8zJoY3faV9TJXQ4FH/exec", {
    method: "POST",
    body: formData
})
.then(response => response.json())
.then(data => {

    enviar.innerHTML = "✓ Confirmado";

    setTimeout(() => {

        alert("Muchas gracias.\n\nTu confirmación fue registrada correctamente.");

        limpiar();

        cerrarModal();

    }, 600);

})
.catch(error => {

    console.error(error);

    enviar.disabled = false;

    enviar.innerHTML = "Confirmar asistencia";

    alert("No fue posible enviar la confirmación.");

});

    });

    /*----------------------------------
        Limpiar
    -----------------------------------*/

    function limpiar() {

        nombre.value = "";

        mensaje.value = "";

        adultos.value = 1;

        ninos.value = 0;

        siAsiste.checked = true;

        adultos.disabled = false;

        ninos.disabled = false;

        enviar.disabled = false;

        enviar.innerHTML = "Confirmar asistencia";

    }

});