var $test = $(".purplecrystal");
$(document).ready(function(){
  var wins = 0;
  var loses = 0;
  
  var score = 0;
  var randomscore = Math.floor(Math.random() * (120 - 19)) + 19;;
  purp = Math.floor(Math.random() * (12 - 1)) + 1;
  pink = Math.floor(Math.random() * (12 - 1)) + 1;
  red =  Math.floor(Math.random() * (12 - 1)) + 1;
  blue = Math.floor(Math.random() * (12 - 1)) + 1;
  function reset(){
    score = 0;
    randomscore = Math.floor(Math.random() * (120 - 19)) + 19;;
    purp = Math.floor(Math.random() * (12 - 1)) + 1;
    pink = Math.floor(Math.random() * (12 - 1)) + 1;
    red =  Math.floor(Math.random() * (12 - 1)) + 1;
    blue = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("rest");
  }
  
  $(".wins").text("Wins: " + wins + " Loses: " + loses);
  $(".value").text(randomscore);
  $(".score").text(score);
  $(".purplecrystal").click(function(){
    score += purp;
    console.log(purp);
    $(".score").text(score);
    if(score == randomscore){
      wins ++;
      reset();
      $(".wins").text("Wins: " + wins + " Loses: " + loses);
      $(".score").text(score);
      $(".value").text(randomscore);
    }
    else if (score > randomscore){
      loses ++
      reset();
      $(".wins").text("Wins: " + wins + " Loses: " + loses);
      $(".score").text(score);
      $(".value").text(randomscore);
    }
    else{

    }
   
});

$(".pinkcrystal").click(function(){
  score += pink;
  console.log(pink);
  $(".score").text(score);
  if(score == randomscore){
    wins ++;
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else if (score > randomscore){
    loses ++
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else{

  }
 
});
$(".bluecrystal").click(function(){
  score += blue;
  console.log(blue);
  $(".score").text(score);
  if(score == randomscore){
    wins ++;
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else if (score > randomscore){
    loses ++
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else{

  }
 
});
$(".redcrystal").click(function(){
  score += red;
  console.log(red);
  $(".score").text(score);
  if(score == randomscore){
    wins ++;
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else if (score > randomscore){
    loses ++
    $(".wins").text("Wins: " + wins + " Loses: " + loses);
    reset();
    $(".score").text(score);
    $(".value").text(randomscore);
  }
  else{

  }
 
});

});