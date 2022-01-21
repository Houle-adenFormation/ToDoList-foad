$(document).ready(function(){

    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fa fa-trash"><i class="fa fa-check"></i></li>');
        $(this).val('');
    });

    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(600);
             $(this).remove();
    });

    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').fadeOut(600);
           
    });
    
});