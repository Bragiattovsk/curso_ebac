$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#input-tarefa').val();
        const novoItem = $('<li style="display: none" ></li>');
        const mensagem = $('<p class="mensagem-sucesso" style="display: none"></p>');

        mensagem.text(`A tarefa ${novaTarefa} foi adicionada`)
        novoItem.text(novaTarefa);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $(mensagem).appendTo('#display-message');
        $(mensagem).fadeIn(2000);
        $(mensagem).fadeOut(5000);
        $(mensagem).val("")
        $('#input-tarefa').val("");
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed');
    })

    $(document).on('dblclick', 'li', function(){
        $(this).remove();
    })
})