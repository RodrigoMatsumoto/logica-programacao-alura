let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);


function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade de ingressos inválida.')
    } else {
        verificaDisponibilidadeIngresso(tipoIngresso, quantidade);
    }
    document.getElementById('qtd').value = '';
}

function verificaDisponibilidadeIngresso(ingresso, quantidade) {
    switch (ingresso) {
        case 'inferior':
            if(quantidade > quantidadeInferior) {
                alert('Quantidade de ingressos indisponível.');
            } else {
                quantidadeInferior -= quantidade;
                alert('Compra realizada com sucesso.');
                document.getElementById('qtd-inferior').textContent = quantidadeInferior;
            }
            return;
        case 'superior':
            if(quantidade > quantidadeSuperior) {
                alert('Quantidade de ingressos indisponível.');
            } else {
                quantidadeSuperior -= quantidade;
                alert('Compra realizada com sucesso.');
                document.getElementById('qtd-superior').textContent = quantidadeSuperior;
            }
            return;
        case 'pista':
            if(quantidade > quantidadePista) {
                alert('Quantidade de ingressos indisponível.');
            } else {
                quantidadePista -= quantidade;
                alert('Compra realizada com sucesso.');
                document.getElementById('qtd-pista').textContent = quantidadePista;
            }
            return;
        default: 
            alert('Tipo de ingresso inválido');
            return;
    }
}