$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const NovoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(NovoItem);
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(NovoItem);
            $(NovoItem).appendTo('ul');
            $(NovoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val("");
    })
})
