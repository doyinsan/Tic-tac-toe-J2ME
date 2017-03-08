$(document).ready(function(){

  var D = D;
  var A = A;
  var oneClick = oneClick;

  $('#row1').click(function() {

    if ($('#1').addClass('D activate'))  {
      oneClick--;
    }else
  $('#1').addClass('A activate');
    {
      oneClick--;
    }
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  }

);
$('#row2').click(function() {

  if ($('#1').addClass('D activate'))  {
    oneClick--;
  }else
$('#1').addClass('A activate');
  {
    oneClick--;
  }
  alert('O has won the game. Start a new game');

  $('#row1 td').removeClass('disable');
  $('#row1 td').removeClass('D');
  $('#row1 td').removeClass('A');
}

);

});
