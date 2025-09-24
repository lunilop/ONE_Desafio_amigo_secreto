let listaAmigos = [];
let amigoSecreto = '';

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; 
    }
    listaAmigos.push(amigo);

    let elemento = document.getElementById('listaAmigos');
    
    elemento.innerHTML = '';
    for (let nombre of listaAmigos) {
        let li = document.createElement('li');
        li.textContent = nombre;
        elemento.appendChild(li);
    }

    document.getElementById('amigo').value = '';
}

function generarAmigoSecreto() {
    let posicionAmigo = Math.floor(Math.random() * listaAmigos.length);
    amigoSecreto = listaAmigos[posicionAmigo];
    return;
}

function sortearAmigo() {
    document.getElementById('listaAmigos').value = '';
    resultado = document.getElementById('resultado');
    generarAmigoSecreto(amigoSecreto);
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    return;
}