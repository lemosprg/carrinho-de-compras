let totalGeral = 0;

function adicionar() {
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;

  // Verificar se a quantidade inserida é válida
  if (quantidade <= 0 || isNaN(quantidade)) {
    alert("Insira uma quantidade válida.");
    return;
  }

  let nomeProduto = produto.split('-')[0];
  let valorProduto = produto.split('R$')[1];
  let preco = quantidade * valorProduto;
  let listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto},00</span>
  </section>`;

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral},00`;
  //Limpar campo de quantidade
  document.getElementById('quantidade').value = 0

}

function finalizar() {
  alert(`O total de sua compra foi de R$${totalGeral},00.`);
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}