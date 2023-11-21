
var carrinhoVisivel = false;


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
    //Funcionalidade do carrinho
    var botoesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botoesEliminarItem.length; i++){
        var button = botoesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrinho);
    }

    var botaoSomarQtd = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botaoSomarQtd.length; i++){
        var button = botaoSomarQtd[i];
        button.addEventListener('click',sumarCantidad);
    }

   
    var botaoRestarQtd = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botaoRestarQtd.length; i++){
        var button = botaoRestarQtd[i];
        button.addEventListener('click',restarCantidad);
    }

    //Fucionalidades do carrinho
    var botaoAdicionarAoCarrinho = document.getElementsByClassName('boton-item');
    for(var i=0; i<botaoAdicionarAoCarrinho.length;i++){
        var button = botaoAdicionarAoCarrinho[i];
        button.addEventListener('click', adicionarAoCarrinhoClicado);
    }

    //Botão clicar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}





//Eliminamos todos os elementos do carrinho e eliminamos
function pagarClicked(){

    GerarNSU()

      // Gerar NSU
       // const numeroAleatorio = Math.floor(1 + Math.random() * 99999999);
      // alert("Segue número de NSU: " + numeroAleatorio);

    //Elimino todos los elmentos del carrinho
    var CarrinhoItens = document.getElementsByClassName('carrinho-itens')[0];
    while (CarrinhoItens.hasChildNodes()){
        CarrinhoItens.removeChild(CarrinhoItens.firstChild)
    }
    atualizarTotalCarrinho();
    ocultarCarrinho();
}

function adicionarAoCarrinhoClicado(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('Preco-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    adicionatItemAoCarrinho(titulo, precio, imagenSrc);

    tornarVisivelCarrinho();
}

function tornarVisivelCarrinho(){
    carrinhoVisivel = true;
    var carrinho = document.getElementsByClassName('carrinho')[0];
    carrinho.style.marginRight = '0';
    carrinho.style.opacity = '1';

    var items =document.getElementsByClassName('contener-items')[0];
    items.style.width = '60%';
}


function adicionatItemAoCarrinho(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrinho = document.getElementsByClassName('carrinho-itens')[0];


    var nombresItemsCarrito = itemsCarrinho.getElementsByClassName('carrinho-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            Swal.fire("Esse item já está no seu carrinho")
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrinho-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrinho-item-detalles">
                <span class="carrinho-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrinho-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrinho-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrinho.append(item);

//Adicionamos a funcionalidade de exclusão ao novo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrinho);

//Adicionamos a funcionalidade para subtrair quantidade do novo item
    var botaoRestaurarQtd = item.getElementsByClassName('restar-cantidad')[0];
    botaoRestaurarQtd.addEventListener('click',restarCantidad);

//Adicionamos a funcionalidade para adicionar quantidade do novo item
    var botaoSomarQtd = item.getElementsByClassName('sumar-cantidad')[0];
    botaoSomarQtd.addEventListener('click',sumarCantidad);

//Atualizamos o total
    atualizarTotalCarrinho();
}
//Aumenta a quantidade do elemento selecionado em um
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
    atualizarTotalCarrinho();
}
//Subtrai a quantidade do elemento selecionado por um
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrinho-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrinho-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrinho-item-cantidad')[0].value = cantidadActual;
        atualizarTotalCarrinho();
    }
}
//Elimino o item selecionado do carrinho
function eliminarItemCarrinho(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    //Atualiza o total do carrinho
    atualizarTotalCarrinho();

 //a seguinte função controla se existem elementos no carrinho
    //Se não tiver eu elimino o carrinho
    ocultarCarrinho();
}
//Função que controla se existem elementos no carrinho. Se não houver carrinho escondido.
function ocultarCarrinho(){
    var CarrinhoItens = document.getElementsByClassName('carrinho-itens')[0];
    if(CarrinhoItens.childElementCount==0){
        var carrinho = document.getElementsByClassName('carrinho')[0];
        carrinho.style.marginRight = '-100%';
        carrinho.style.opacity = '0';
        carrinhoVisivel = false;
    
        var items =document.getElementsByClassName('contener-items')[0];
        items.style.width = '100%';
    }
}
//Atualizamos o total do carrinho
function atualizarTotalCarrinho(){
    //seleciona o contêiner do carrinho
    var carritoContenedor = document.getElementsByClassName('carrinho')[0];
    var CarrinhoItens = carritoContenedor.getElementsByClassName('carrinho-item');
    var total = 0;
   //percorremos cada elemento do carrinho para atualizar o total
    for(var i=0; i< CarrinhoItens.length;i++){
        var item = CarrinhoItens[i];
        var precioElemento = item.getElementsByClassName('carrinho-item-precio')[0];
       //removemos o símbolo do peso e a vírgula dos milésimos.
        var precio = parseFloat(precioElemento.innerText.replace('R$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrinho-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 1)/100;

    document.getElementsByClassName('carrinho-precio-total')[0].innerText = 'R$'+total.toLocaleString("es") + ",00";

}



// Altera "index.html" para o caminho real da sua página inicial
//function irParaHome() {  
   //
    //window.location.href = "index.html";
//}




