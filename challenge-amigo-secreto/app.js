let amigos = [];
let juegoIniciado = false; // Variable para controlar si el sorteo ya se realizó

// Detectar tecla "Enter" en el input y agregar el amigo
document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita el comportamiento por defecto (como enviar formularios)
        agregarAmigo();
    }
});

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (juegoIniciado) {
        alert("El sorteo ya ha sido realizado. Reinicia el juego para agregar más nombres.");
        return;
    }

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista visualmente
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "❌";
        btnEliminar.classList.add("btn-eliminar"); // Agregamos la clase para los estilos
        btnEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    if (juegoIniciado) {
        alert("No puedes eliminar nombres después del sorteo. Reinicia el juego para modificar la lista.");
        return;
    }

    amigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    if (juegoIniciado) {
        reiniciarJuego(); // Si el juego ya empezó, reiniciar en lugar de sortear
        return;
    }

    let amigosDisponibles = [...amigos];
    let resultado = [];

    amigos.forEach((nombre) => {
        let opciones = amigosDisponibles.filter((n) => n !== nombre);

        if (opciones.length === 0) {
            alert("Error en el sorteo, inténtelo nuevamente.");
            return;
        }
        let amigoSecreto = opciones[Math.floor(Math.random() * opciones.length)];
        resultado.push(`${nombre} → ${amigoSecreto}`);

        // Eliminamos el amigo sorteado para que no se repita
        amigosDisponibles.splice(amigosDisponibles.indexOf(amigoSecreto), 1);
    });

    mostrarResultado(resultado);
    juegoIniciado = true; // Se activa el estado del juego
    actualizarBotonSorteo(); // Se cambia el botón a "Reiniciar Juego"
}

// Función para mostrar el resultado del sorteo con un título
function mostrarResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores

    // Crear un título antes de los resultados
    let titulo = document.createElement("h2");
    titulo.textContent = "Resultados del Sorteo 🎉";
    titulo.classList.add("titulo-resultado");

    // Agregar el título antes de la lista
    listaResultado.appendChild(titulo);

    // Agregar las asignaciones del sorteo
    resultado.forEach((asignacion) => {
        let li = document.createElement("li");
        li.textContent = asignacion;
        listaResultado.appendChild(li);
    });
}


// Función para actualizar el botón de sorteo a "Reiniciar Juego"
function actualizarBotonSorteo() {
    let boton = document.querySelector(".button-draw");
    boton.innerHTML = '<img src="assets/restart_icon.png" alt="Ícono para reiniciar"> Reiniciar Juego';
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    juegoIniciado = false;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    let boton = document.querySelector(".button-draw");
    boton.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
}
