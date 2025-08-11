async function cargarCSV() {
    const respuesta = await fetch("/src/data/energia_solar_latam_final_stf.csv");
    const texto = await respuesta.text();
    const lineas = texto.trim().split("\n");
    const encabezados = lineas[0].split(",");
    const datos = lineas.slice(1);

    const tbody = document.querySelector("#tablacondatos tbody");

    datos.forEach((fila) => {
        const columnas = fila.split(",");
        if (columnas.length === encabezados.length) {
            const filaElemento = document.createElement("tr");
            columnas.forEach((dato) => {
                const celda = document.createElement("td");
                celda.textContent = dato.trim();
                filaElemento.appendChild(celda);
            });
            tbody.appendChild(filaElemento);
        }
    });
}
cargarCSV()