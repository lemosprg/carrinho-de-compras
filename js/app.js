let totalGeral = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`;

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;
  //Limpar campo de quantidade
  document.getElementById('quantidade').value = 0

}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}