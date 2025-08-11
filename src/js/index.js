// Seleccionamos todos los botones dentro de .question
const botones = document.querySelectorAll(".question button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Encuentra el párrafo <p> siguiente al botón y lo alterna
        const parrafo = boton.nextElementSibling;
        if (parrafo.style.display === "block") {
            parrafo.style.display = "none";
        } else {
            parrafo.style.display = "block";
        }
    });
});



// Selecciona todos los enlaces que apuntan a secciones internas (href="#algo")
document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    // Agrega evento al hacer clic
    enlace.onclick = evento => {
        evento.preventDefault(); // Evita el salto instantáneo al enlace

        // Obtiene el destino usando el valor del href (por ejemplo "#contacto")
        const destino = document.querySelector(enlace.hash);

        // Oculta todas las secciones quitando la clase 'activa'
        document.querySelectorAll('.btnnavegacion').forEach(seccion =>
            seccion.classList.remove('activa')
        );

        // Si el destino existe (sección encontrada)
        if (destino) {
            destino.classList.add('activa'); // Muestra la sección
            destino.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta la sección

            // Aplica animación de resaltado por 1 segundo
            destino.classList.add('resaltar');
            setTimeout(() => destino.classList.remove('resaltar'), 1000);
        }
    };
});


// Feedback
// Esperamos a que todo el contenido HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    // Obtenemos el formulario de feedback por su ID
    const feedbackForm = document.getElementById("feedback-form");

    // Seleccionamos todos los botones de opinión que tienen la clase 'feedback-btn'
    const buttons = document.querySelectorAll(".feedback-btn");

    // Obtenemos el párrafo donde se mostrará el mensaje de confirmación o error
    const confirmation = document.getElementById("confirmation");

    // Obtenemos el área de texto donde el usuario puede escribir un mensaje adicional
    const feedbackMessage = document.getElementById("feedback-message");

    // Variable para guardar la opción de feedback seleccionada por el usuario
    let selectedFeedback = "";

    // === MANEJO DE CLIC EN LOS BOTONES DE OPINIÓN ===
    buttons.forEach(button => {
        // A cada botón le agregamos un "escuchador" de eventos cuando se hace clic
        button.addEventListener("click", function () {
            // Guardamos el texto del botón que se seleccionó, por ejemplo: "😊 Me gustó"
            selectedFeedback = this.textContent;

            // Quitamos el color de selección de todos los botones
            buttons.forEach(btn => {
                btn.style.backgroundColor = ""; // Restaurar fondo original
                btn.style.color = "";           // Restaurar color de texto original
            });

            // Aplicamos un estilo visual al botón que fue seleccionado
            this.style.backgroundColor = "#214221"; // Fondo rojo oscuro
            this.style.color = "white";             // Texto blanco
        });
    });

    // === MANEJO DEL ENVÍO DEL FORMULARIO ===
    feedbackForm.addEventListener("submit", function (e) {
        // Evita que la página se recargue al enviar el formulario
        e.preventDefault();

        // Validamos si el usuario seleccionó alguna de las opciones
        if (!selectedFeedback) {
            // Si no eligió ninguna opción, mostramos un mensaje de advertencia
            confirmation.textContent = "Por favor selecciona una opción antes de enviar.";
            confirmation.style.color = "red";
            confirmation.style.display = "block";  // Hacemos visible el mensaje
            return; // Detenemos la ejecución para no continuar con el envío
        }

        // Si todo está correcto, mostramos un mensaje de agradecimiento
        confirmation.textContent = "¡Gracias por tu opinión!";
        confirmation.style.color = "green";
        confirmation.style.display = "block";  // Mostramos el mensaje

        // También imprimimos en consola los datos enviados (para depuración)
        console.log("Opinión:", selectedFeedback);
        console.log("Mensaje:", feedbackMessage.value.trim());

        // Reiniciamos el formulario: borra el mensaje escrito
        feedbackForm.reset();

        // Quitamos los estilos visuales de todos los botones
        buttons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        // Borramos la opción seleccionada
        selectedFeedback = "";
    });
});



// validacion Formulario contacto
document.getElementById("contactanos-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    const msjvalidacion = document.getElementById("mensajevalidacioncontactanos");

    //validacion de nombre
    if (nombre === "") {
        msjvalidacion.textContent = "El nombre no puede estar vacio.";
        msjvalidacion.style.color = "red";
        return;
    }

    // validacion de correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        msjvalidacion.textContent = "*El correo electronico no es valido";
        msjvalidacion.style.color = "red";
        return;
    }
    // validacion de asunto
    if (asunto === "") {
        msjvalidacion.textContent = "*El mensaje no puede estar vacio.";
        msjvalidacion.style.color = "red";
        return;
    }
    // validacion de mensaje
    if (mensaje === "") {
        msjvalidacion.textContent = "*El mensaje no puede estar vacio.";
        msjvalidacion.style.color = "red";
        return;
    }

    msjvalidacion.textContent = "!El formulario enviado correctamente!";
    msjvalidacion.style.color = "green";
});




// Funcionalidad calculadora

function calcular() {
    event.preventDefault();
    const consumo = parseFloat(document.getElementById("consumo").value);
    const capacidad = parseFloat(document.getElementById("solar").value);

    if (isNaN(consumo) || isNaN(capacidad) || consumo <= 0 || capacidad <= 0) {
        document.getElementById("resultado").textContent = "Por favor ingresa valores válidos.";
        return;
    }

    // Factor de producción solar (horas solares pico * días)
    // Si es mensual → aprox. 4.5 horas/día * 30 días = 135 h
    // Si es anual   → aprox. 4.5 horas/día * 365 días = 1642 h
    // Aquí usamos mensual como ejemplo
    const HORAS_SOLARES_PICO_MES = 135;

    // Energía solar estimada generada (kWh)
    const energiaSolar = capacidad * HORAS_SOLARES_PICO_MES;

    // Porcentaje de consumo cubierto por solar
    const porcentaje = (energiaSolar / consumo) * 100;

    document.getElementById("resultado").textContent =
        `Tus paneles solares generan aproximadamente ${energiaSolar.toFixed(2)} kWh,
         lo que cubre el ${porcentaje.toFixed(1)}% de tu consumo.`;
}