// Lógica para ir para a página do Maps dentro do carrinho
function irParaMapa() {

    window.location.href = "Mapa/mapa.html";
}


// Lógica para ir para a página do Maps fora do carrinho
var botaoPagar = document.querySelector('.contener-items > div:last-child .btn-pagar');

botaoPagar.addEventListener('click', function () {

    irParaMapa();

});




//buscar a pag de avaliações
function carregarAvaliacoes() {

    fetch('Avaliacao.html')
        .then(response => response.text())
        .then(data => {

            document.getElementById('avaliacoes-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar avaliações:', error));
}


function irParaAvaliacao() {

    window.location.href = "Avalição/Avaliacao.html";
}


/*function irParaHome() { 
   
    window.location.href = "index.html";
}*/