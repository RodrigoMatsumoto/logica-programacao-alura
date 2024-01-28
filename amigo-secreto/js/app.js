let nomeAmigos = [];
let jaHouveSorteio = false;

function adicionar() {
    let listaAmigos = document.getElementById('lista-amigos');
    let nomeAmigo = document.getElementById('nome-amigo');
    let nomeAmigoMaiusculo = nomeAmigo.value.toUpperCase();

    if(jaHouveSorteio) {
        alert('Já houve sorteio, não é possível adicionar mais amigos!\nReinicie o jogo.');
        return;
    }

    if(nomeAmigoMaiusculo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if(nomeAmigos.includes(nomeAmigoMaiusculo)) {
        alert('Nome já adicionado');
        return;
    }

    nomeAmigos.push(nomeAmigoMaiusculo);

    
    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigoMaiusculo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + " - " + nomeAmigoMaiusculo;
    }
    
    nomeAmigo.value = '';

    atualizarListaAmigos();
    atualizarListaSorteio();
}

function sortear() {
    if(nomeAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(nomeAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < nomeAmigos.length; i++) {
        if(i == nomeAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomeAmigos[i] + ' ---> '+ nomeAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomeAmigos[i] + ' ---> '+ nomeAmigos[i + 1] + '<br>';
        }

    }
    jaHouveSorteio = true;
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomeAmigos = [];
    jaHouveSorteio = false;
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < nomeAmigos.length; i++) {
        let amigo = document.createElement('span');
        if(i == 0) {
            amigo.textContent = nomeAmigos[0];
        } else {
            amigo.textContent = ' - ' + nomeAmigos[i];
        }
        amigo.addEventListener('click', function() {
            excluirAmigo(i);
        });
        listaAmigos.appendChild(amigo);
    }
}

function atualizarListaSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

function excluirAmigo(indice) {
    if(jaHouveSorteio) {
        alert('Já houve sorteio, não é possível excluir amigo.\nReinicie o programa.');
        return;
    }
    nomeAmigos.splice(indice, 1);
    atualizarListaAmigos();
    atualizarListaSorteio();
}