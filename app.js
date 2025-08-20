// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let id = document.getElementById("amigo");
    let nombre = id.value.trim();

    if (nombre === ""){
        alert("Por favor ingresa un nombre");
        return;
    }
//Agregamos el array
    amigos.push(nombre);
    //limpiamos campo
    id.value = "";
    //Se muestra en la consola que si guarda nombres ingresados
    console.log(amigos);

    mostrarLista();
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    // limpiar lista antes de volver a dibujar
    lista.innerHTML = "";
    //Crear un <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
}
}