let valorTotal = 0;
limpar();

function adicionar() {
    //recuperar nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value.split(' - R$');
    let nomeProduto = produto[0];
    let valorUnitarioProduto = produto[1];
    let quantidade = document.getElementById('quantidade').value;
    
    if(quantidade <= 0 || isNaN(quantidade)) {
        alert('Insira uma quantidade válida.');
        return;
    }

    if(!produto || produto[0].trim() === "") {
        alert('Selecione um produto válido.');
        return;
    }

    //calcular o subtotal
    let preco = quantidade * valorUnitarioProduto;
    
    //adicionar no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${ quantidade }x</span> ${ nomeProduto } <span class="texto-azul">R$${ preco }</span></section>`;
    
    //atualizar o valor total
    valorTotal += preco;
    let campoValorTotal = document.getElementById('valor-total');
    campoValorTotal.textContent = `R$ ${ valorTotal }`;
    document.getElementById('quantidade').value = "0";
}
 
function limpar() {
    valorTotal = 0;

    document.getElementById('lista-produtos').innerHTML= '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
