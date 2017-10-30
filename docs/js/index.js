var itemClicado = $( '.nav-item' );
var voltarAoEstadoInicialDaAplicacao = $('.navbar-brand');


$( '.nav-item' ).click(function() {
  
    itemClicado.removeClass('active');
   $($('.nav-item')[0].parentNode).addClass('active');
    fechaMenu();
});


$('.navbar-brand' ).click(function() {
  fechaMenu();
});


function fechaMenu(){
    $( '.navbar-collapse' ).removeClass('show');
}


$('.container').click(function(){
   fechaMenu();
});



function salvarDados(){
    //var form = $('.form-control');
    console.log($('#formulario'));
}


function mostrarAbaDeAcordoComIdentificador(){
    var valor = $('#identificacao').val();
    var identificador = valor.toLowerCase();
    if(identificador == 'carteira de trabalho'){
        $('.painel-carteira-trabalho').show();
    }else if(identificador == 'certidão de nascimento' || identificador =='certidao de nascimento' || identificador =='certidão de casamento' || identificador == 'certidao de casamento' || identificador == 'certidão de divorcio' || identificador == 'certidao de divorcio'){
        $('.painel-tipo-certidao').show();
        $('tipo-certidao').val()= identificador;
    }else{
         $('.painel-tipo-certidao').hide(); 
        $('.painel-carteira-trabalho').hide(); 
    }
    
    console.log(identificador);
}