//Array para almacenar nombres introducidos por el usuario
let amigos=[];
console.log(amigos);
let contadorAmigos = 0;
//Capturarar el valor de entrada ded una página HTML para ser procesado por nuestra lógica
function agregarAmigo(){
    let nombreDeUsuario = document.querySelector('#amigo').value;
    if(nombreDeUsuario.trim() === ''){
        alert('Por favor, inserte un nombre válido');
    } else{
        amigos.push(nombreDeUsuario);
        limpiarCaja();
        actualizarAmigos();
        console.log(amigos);
    }
}
//Limpiar la caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
//Actualizar la lista de amigos
function actualizarAmigos(){
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML=''; //Limpiar lista existente y evitar duplicados
    contadorAmigos = amigos.length;
    for (let i=0; i < amigos.length; i++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }

}

function sortearAmigo(){
    if (amigos.length === 0) { 
        alert("No existen aún nombres por sortear");
        document.getElementById('botonSortear').setAttribute('disabled', true);
    } else {
        document.getElementById('botonSortear').removeAttribute('disabled');
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
        obtenerAmigo(indiceAleatorio);
    }
}

function obtenerAmigo(índiceAleatorio){
    let resultado = amigos[índiceAleatorio];
    let amigoSecretoRevelado = document.querySelector('#resultado');
    amigoSecretoRevelado.innerHTML = `El amigo secreto en esta ocasión es : ${resultado}`;
}



function condicionesIniciales() {
    contadorAmigos = 0;
    amigos = [];
    document.querySelector('#listaAmigos').innerHTML = ''; 
    document.querySelector('#resultado').innerHTML = ''; 
    alert.log("Okay, prueba desde el principio");
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#botonSortear').setAttribute('disabled','true');
    console.log('Juego reiniciado');
}
condicionesIniciales();