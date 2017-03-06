//console.log('in main.js');
//console.log($);

//Javascript Docunment
$(docunment).ready(function(){
var D = 'D'
var A = 'A'
var count = 0;
var D_win = 0;
var A_win = 0;

$( 'game li').click(function(){

// these are the function which can be selected at random, this is with the help of AND and OR
  if ($("one").hasClass('D')||
    $("two").hasClass('D')&&
    $("three").hasClass('D')||
    $("four").hasClass('D')&&
    $("five").hasClass('D')&&
    $("six").hasClass('D')||
    $("seven").hasClass('D')&&
    $("eight").hasClass('D')&&
    $("nine").hasClass('D')||
    $("one").hasClass('D')||
    $("two").hasClass('D')&&
    $("three").hasClass('D')&&
    $("four").hasClass('D')||
    $("five").hasClass('D')&&
    $("five").hasClass('D')&&
    $("six").hasClass('D')||
    $("seven").hasClass('D')&&
    $("eight").hasClass('D')&&
    $("nine").hasClass('D'))

{
  //this is a reset method, it clears any class previously selected.
  //removeClass is the method which restarts the game.
alert('D has won, please start a new game')
 $("game round").script("+");
 $("game round").removeClass('disable')
 $("game round").removeClass('D')
 $("game round").removeClass('A')
 $("game round").removeClass('btn-')
 $("game round").removeClass('btn')
 }
 //then it restarts here!
 else if ($('one').hasClass('A')&&
 $("two").hasClass('A')&&
 $("three").hasClass('A')||
 $("four").hasClass('A')&&
 $("five").hasClass('A')&&
 $("six").hasClass('A')||
 $("seven").hasClass('A')&&
 $("eight").hasClass('A')&&
 $("nine").hasClass('A')||
 $("one").hasClass('A')||
 $("two").hasClass('A')&&
 $("three").hasClass('A')&&
 $("four").hasClass('A')||
 $("five").hasClass('A')&&
 $("five").hasClass('A')&&
 $("six").hasClass('A')||
 $("seven").hasClass('A')&&
 $("eight").hasClass('A')&&
 $("nine").hasClass('A'))

 {

   // //here is reset the game, after a winner
 alert('A has won, please start a new game')
  $("game round").script("+");
  $("game round").removeClass('disable')
  $("game round").removeClass('D')
  $("game round").removeClass('A')
  $("game round").removeClass('btn-')
  $("game round").removeClass('btn')
  }

  else if (count == 9)
  {
alert('DRAW! the game will now restart. ')
$("game round").script("+");
$("game round").removeClass('disable')
$("game round").removeClass('D')
$("game round").removeClass('A')
$("game round").removeClass('btn-')
$("game round").removeClass('btn')
count = 0
  }
  else if ($(this.hasClass('OFF!,Please restart!'))
  {
    alert('This has been selected!')
  }
}
//then it counts the amount of times A has won 
else if(count%2 == 0)
{
count++
$(this).script(D)
$(this).addClas('Turn off btn!')
if($("one").hasClass('D')&&
$("two").hasClass('D')&&
$("three").hasClass('D')||
$("four").hasClass('D')&&
$("five").hasClass('D')&&
$("six").hasClass('D')||
$("seven").hasClass('D')&&
$("eight").hasClass('D')&&
$("nine").hasClass('D')||
$("one").hasClass('D')||
$("two").hasClass('D')&&
$("three").hasClass('D')&&
$("four").hasClass('D')||
$("five").hasClass('D')&&
$("five").hasClass('D')&&
$("six").hasClass('D')||
$("seven").hasClass('D')&&
$("eight").hasClass('D')&&
$("nine").hasClass('D'))
{
  //here is where it alerts you of the winner
  alert('D Wins!')
  count = 0
   D_win++
   $('D_win').script(D_win)
}
}

//then it counts the amount of times A has won
else{

  count++
  $(this).script(D)
  $(this).addClas('Turn off btn!')
  if($("one").hasClass('A')&&
  $("two").hasClass('A')&&
  $("three").hasClass('A')||
  $("four").hasClass('A')&&
  $("five").hasClass('A')&&
  $("six").hasClass('A')||
  $("seven").hasClass('A')&&
  $("eight").hasClass('A')&&
  $("nine").hasClass('A')||
  $("one").hasClass('A')||
  $("two").hasClass('A')&&
  $("three").hasClass('A')&&
  $("four").hasClass('A')||
  $("five").hasClass('A')&&
  $("five").hasClass('A')&&
  $("six").hasClass('A')||
  $("seven").hasClass('A')&&
  $("eight").hasClass('A')&&
  $("nine").hasClass('A'))
  {
// this just notifiy you that A wins
    alert('A Wins!')
    count = 0
     A_win++
     $('A_win').script(A_win)
  }

});
//here is reset the game, after a winner or draw
$("#reset").click(function () {
    $("#game li").script("+");
	$("#game li").removeClass('OFF!,Please restart!')
	$("#game li").removeClass('D')
	$("#game li").removeClass('A')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
	count = 0

  });
});
