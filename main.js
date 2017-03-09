$(document).ready(function(){

  $('p').click(function(){
    document.location.reload();
  });

  function isEven(num) {
    return parseInt(num) % 2===0;
  }
  var count = 0;
  $('.square').click(function(){


    count++;
    var squareClass =(isEven(count)) ? 'O' : 'X';
    $(this).addClass(squareClass);



    $(function(){
      if ($('#one').hasClass('X') && $('#two').hasClass('X') && $('#three').hasClass('X')
    ||$('#one').hasClass('X') && $('#four').hasClass('X') && $('#seven').hasClass('X')
  ||$('#one').hasClass('X') && $('#five').hasClass('X') && $('#nine').hasClass('X')||
$('#one').hasClass('X') && $('#four').hasClass('X') && $('#seven').hasClass('X')
||$('#two').hasClass('X') && $('#five').hasClass('X') && $('#eight').hasClass('X')
||$('#three').hasClass('X') && $('#six').hasClass('X') && $('#nine').hasClass('X')
|| $('#four').hasClass('X') && $('#five').hasClass('X') && $('#six').hasClass('X')
|| $('#seven').hasClass('X') && $('#eight').hasClass('X') && $('#nine').hasClass('X')
||$('#three').hasClass('X') && $('#five').hasClass('X') && $('#seven').hasClass('X')
||$('#two').hasClass('X') && $('#five').hasClass('X') && $('#eight').hasClass('X')){
        $('#result').html('X is a Winner, Sorry O loses');


      }else if
($('#one').hasClass('O') && $('#two').hasClass('O') && $('#three').hasClass('O')||
$('#one').hasClass('O') && $('#four').hasClass('O') && $('#seven').hasClass('O')
||$('#one').hasClass('O') && $('#five').hasClass('O') && $('#nine').hasClass('O')||
$('#one').hasClass('O') && $('#four').hasClass('O') && $('#seven').hasClass('O')
||$('#two').hasClass('O') && $('#five').hasClass('O') && $('#eight').hasClass('O')
||$('#three').hasClass('O') && $('#six').hasClass('O') && $('#nine').hasClass('O')
|| $('#four').hasClass('O') && $('#five').hasClass('O') && $('#six').hasClass('O')
|| $('#seven').hasClass('O') && $('#eight').hasClass('O') && $('#nine').hasClass('O')
||$('#three').hasClass('O') && $('#five').hasClass('O') && $('#seven').hasClass('O')
||$('#two').hasClass('O') && $('#five').hasClass('O') && $('#eight').hasClass('O')){
        $('#result').html('O is a Winner, Sorry X loses');


      }else{
        if(count === 9){
          $('#result').html('IT A DRAW');
        }
      }
    });
  });
});
