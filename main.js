
$(document).ready(function() {
    $('header button').click(function() {
   $('form').slideDown();
    })

    $('#botao-voltar').click(function(){
        $('form').slideUp();
    })
      
    $('form').on('submit', function(e) {

         e.preventDefault();
         const adicionarNovaTarefa = $('#adiciona-nova-tarefa').val();
        const novaTarefa = $('<li style="display: none"></li>');

        $(`<h2 = "${adicionarNovaTarefa}" />`).appendTo(novaTarefa);

        $(` <div class="cadastro-nova-tarefa">
                <h2>${adicionarNovaTarefa}</h2>
            </div>    
        `)
        
        .appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(2000);
        $('#adiciona-nova-tarefa').val('')
    })

})

    $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');});














