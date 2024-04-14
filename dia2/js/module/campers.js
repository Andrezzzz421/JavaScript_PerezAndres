let campers = [];
let modoActualizar = false; // Variable para controlar el modo del formulario

document.getElementById("registercamperForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío por defecto

    const camperData = {
        N_documento: document.getElementById("documento").value,
        nombre: document.getElementById("nombre").value,
        nombre2: document.getElementById("nombre2").value,
        apellido: document.getElementById("apellido").value,
        apellido2: document.getElementById("apellido2").value,
        ciudad: document.getElementById("ciudad").value,
        Direccion: document.getElementById("direccion").value,
        Acudiente: document.getElementById("acudiente").value,
        N_celular: document.getElementById("celular").value,
        N_fijo: document.getElementById("fijo").value,
        Estado: "Inscrito",
        Riesgo: "Sin riesgo"
    };

    if (modoActualizar) {
        const updateId = parseInt(document.getElementById("updateId").value, 10);
        const index = campers.findIndex(camper => camper.ID === updateId);
        if (index !== -1) {
            campers[index] = {...campers[index], ...camperData};
        }
        modoActualizar = false; // Resetear el modo
        document.getElementById("submitBtn").value = "Agregar Camper"; // Cambiar texto del botón
    } else {
        let ultimoId = campers.length > 0 ? Math.max(...campers.map(camper => camper.ID)) : 0;
        let nuevoId = ultimoId + 1;
        campers.push({...camperData, ID: nuevoId}); // Agregar ID y añadir al array
    }

    mostrarCampers();
});

function mostrarCampers() {
    let campersContainer = document.getElementById("campersContainer");
    campersContainer.innerHTML = ""; // Limpiar contenido anterior

    campers.forEach(camper => {
        let camperDiv = document.createElement("div");
        camperDiv.innerHTML = `
            <p>ID: ${camper.ID}</p>
            <p>Número de Documento: ${camper.N_documento}</p>
            <p>Nombre: ${camper.nombre} ${camper.nombre2} ${camper.apellido} ${camper.apellido2}</p>
            <p>Ciudad: ${camper.ciudad}</p>
            <p>Dirección: ${camper.Direccion}</p>
            <p>Acudiente: ${camper.Acudiente}</p>
            <p>Número de Celular: ${camper.N_celular}</p>
            <p>Número de Teléfono Fijo: ${camper.N_fijo}</p>
            <p>Estado: ${camper.Estado}</p>
            <p>Riesgo: ${camper.Riesgo}</p>
            <button onclick="editarCamper(${camper.ID})">Editar</button>
            <hr>
        `;
        campersContainer.appendChild(camperDiv);
    });
}

function editarCamper(ID) {
    const camper = campers.find(c => c.ID === ID);
    if (camper) {
        document.getElementById("documento").value = camper.N_documento;
        document.getElementById("nombre").value = camper.nombre;
        document.getElementById("nombre2").value = camper.nombre2;
        document.getElementById("apellido").value = camper.apellido;
        document.getElementById("apellido2").value = camper.apellido2;
        document.getElementById("ciudad").value = camper.ciudad;
        document.getElementById("direccion").value = camper.Direccion;
        document.getElementById("acudiente").value = camper.Acudiente;
        document.getElementById("celular").value = camper.N_celular;
        document.getElementById("fijo").value = camper.N_fijo;
        document.getElementById("updateId").value = camper.ID;
        document.getElementById("submitBtn").value = "Actualizar Camper";
        modoActualizar = true; // Cambiar modo a actualizar
    }
}

document.getElementById("registroCamperForm").addEventListener("submit", function(event) {
    event.preventDefault();

});

document.getElementById("pruebaInicialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const ID_camper = parseInt(document.getElementById("idCamper").value);
    const nota_practica = parseInt(document.getElementById("notaPractica").value);
    const nota_teorica = parseInt(document.getElementById("notaTeorica").value);

    if (isNaN(ID_camper) || isNaN(nota_practica) || isNaN(nota_teorica)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    const nota_ingreso = (nota_practica + nota_teorica) / 2; // Corrección en la fórmula
    const camperIndex = campers.findIndex(camper => camper.ID === ID_camper);
    if (camperIndex !== -1) {
        campers[camperIndex].Estado = nota_ingreso >= 60 ? "Aprobado" : "Reprobado";
        mostrarCampers(); // Actualizar la visualización de los campers
    } else {
        alert("No se encontró un Camper con ese ID.");
    }
});
