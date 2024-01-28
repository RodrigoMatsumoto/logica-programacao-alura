let jogosAlugados = 0;

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirQuantidadeJogosAlugados();
})

function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = confirm(`Deseja devolver o jogo ${nomeJogo.textContent}?`);
        if(confirmacao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    exibirQuantidadeJogosAlugados();
}

function exibirQuantidadeJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}