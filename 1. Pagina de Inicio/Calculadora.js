

// Asignamos un evento "click" al botón con id="calcularconsumo"
document.getElementById("calcularconsumo").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    resultado(); // Llama a la función que hace el cálculo
});

// Función principal que obtiene el valor, hace los cálculos y muestra el resultado
function resultado() {
    // Guardamos el valor ingresado por el usuario en la variable "valor"
    const valor = document.getElementById("consumo").value;

    // Guardamos en "mensaje" el elemento <p id="mensajeconsumo"> para luego modificarlo
    const mensaje = document.getElementById("mensajeconsumo");

    // Validamos si el usuario no escribió nada (valor vacío o solo espacios)
    if (valor.trim() === "") {
        // Mostramos un mensaje de error en rojo dentro del párrafo
        mensaje.innerHTML = `<span style="color:red;">⚠ No hay datos ingresados</span>`;
        return; // Salimos de la función para no continuar con los cálculos
    }

    // Convertimos el valor a número decimal para poder hacer cálculos
    const cov = parseFloat(valor);

    // Convertimos el consumo mensual en kWh a TWh anuales
    const twh = convierte_twh(cov);

    // Producción solar total de Colombia en 2021 (en TWh)
    const porcent = 0.31732163;

    // Calculamos qué porcentaje de esa producción equivale al consumo del usuario
    // Fórmula: (tu consumo en TWh * 100) / producción total en TWh
    const porcentaje = ((twh * 100) / porcent).toFixed(4); // 4 decimales

    // Creamos el texto que se mostrará como resultado
    // Usamos template strings (``) para poder insertar variables con ${}
    const rest = `Su consumo promedio mensual fue de <strong>${valor} kWh</strong>, 
                  lo cual es equivalente al <strong>${porcentaje}%</strong> de la 
                  energía solar producida en Colombia en 2021.`;

    // Insertamos el resultado dentro del párrafo
    mensaje.innerHTML = rest;

    // Llamamos a la función que limpia el campo de entrada
    limpia();
}

// Función que convierte kWh mensuales a TWh anuales
function convierte_twh(dato) {
    // Multiplicamos por 12 para obtener el consumo anual en kWh
    // Luego dividimos entre 1,000,000,000 para convertirlo a TWh
    return (dato * 12) / 1_000_000_000;
}

// Función que limpia el campo de entrada
function limpia() {
    // Asignamos una cadena vacía al valor del input para dejarlo en blanco
    document.getElementById("consumo").value = "";
}








/*           COMO WILLMAR LO ENSENO




document.getElementById("formEstimador").addEventListener("submit", function(e){
    e.preventDefault(); // Evita que el formulario recargue la página
    resultado();
});

function resultado(){
    const valor = document.getElementById("consumo").value;
    
    if(valor.trim() === ""){
        Swal.fire({
            title: "Error",
            text: "No hay datos ingresados",
            icon: "error",
            confirmButtonText: "Cerrar"
        });
        return;
    }

    const cov = parseFloat(valor);
    const twh = convierte_twh(cov);
    const porcent = 0.31732163; // Producción solar en Colombia 2021 en TWh
    const porcentaje = ((twh * 100) / porcent).toFixed(4);

    const rest = `Su consumo promedio mensual fue de ${valor} kWh, lo cual es equivalente al ${porcentaje}% de la totalidad consumida de la fuente de energía solar producida en Colombia en 2021.`;

    Swal.fire({
        title: "Excelente",
        text: rest,
        icon: "success",
        confirmButtonText: "Cool"
    });

    limpia();
}

function convierte_twh(dato){
    // Convierte consumo mensual kWh a TWh anual
    return (dato * 12) / 1_000_000_000;
}

function limpia(){
    document.getElementById("consumo").value = "";
}*/

