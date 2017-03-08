$(document).ready(function(){
  var oneClick = 0;

  $('#one').click(function() {
    if ($('#one').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#one').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#two').click(function() {
    if ($('#two').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#three').click(function() {
    if ($('#three').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#four').click(function() {
    if ($('#four').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });
  $('#five').click(function() {
    if ($('#five').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#six').click(function() {
    if ($('#six').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#seven').click(function() {
    if ($('#seven').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert(' has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#eight').click(function() {
    if ($('#eight').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');
    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });

  $('#nine').click(function() {
    if ($('#nine').addClass('D activate'))  {
      oneClick--;
    } else {
      $('#1').addClass('A activate');
    }
    oneClick--;
    alert('O has won the game. Start a new game');

    $('#row1 td').removeClass('disable');
    $('#row1 td').removeClass('D');
    $('#row1 td').removeClass('A');
  });
});
