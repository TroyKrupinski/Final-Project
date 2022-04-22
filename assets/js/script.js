$(document).ready(function(){

  $("#sc").empty();
var ar = []; //Global data storing array 
var targarray = []; 
var targs = 0; //Amount of targets
var lower = 0; //Min
var upper = 0; //Max
var rep = 0; 
var up = 0;
var htoggle = false;

var error = false;
var tag = 1;
var auto = 0;

$("#submit-targets").on("click",function(event){
  
  targarray = [];
  targs = 0;
  tag = 1;
  $("#tt").html('');
//Appending target input boxes to data div
      event.preventDefault();
      targnumb = parseInt($("#target-number").val().trim());
      for(i = 0; i < targnumb; i++){
              $("#tt").append("<div class = 'form-group row'");
              $("#tt").append("<label for='target'>Target " + tag + "</label>");
              $("#tt").append("<input class='form-control' id='target" + i + "' type='number'>");
              $("#tt").append("</div>");
              targs++;
           tag++;

      }
      
      $("#target-number").val('');
});
$("#submit-numbers").on("click", function(event){
targarray = [];
ar = [];
error = false;
//Ui / style / getting inputs

$("#sc").html('');
event.preventDefault();
var lower = ($("#lower-number").val().trim());
var upper = ($("#upper-number").val().trim());
var rep = ($("#rep-number").val().trim());
rep++;
var targstring = "";

for(x = 0; x < targs; x++){

  targstring = "#target" + x;           
  targarray.push($(targstring).val().trim());

}

//Error checking
if(lower > upper){
  alert('Lower input must be smaller than higher!');
  lower = 0;
  upper = 0;
  rep = 0;
  target = 0;
  error = true;
  clear()
}
if(lower < 0|| upper < 0){
  alert('Lower and upper must not be negative!')
  lower = 0;
  upper = 0;
  rep = 0;
  target = 0;
  error = true;
  clear()
}
if(targs > (upper - lower)){
  alert('Too many targets!')
  lower = 0;
  upper = 0;
  rep = 0;
  target = 0;
  error = true;
  clear()
}
for(u = 0; u< targarray.length; u++){
  targstring3 = "#target" + u;
 
  if($(targstring3).val() == ''){
  alert('Must enter something for every target.')
  lower = 0;
  upper = 0;
  rep = 0;
  target = 0;
  error = true;
  break;
  
  }
}
//Pushing data to global array
ar.push(lower);
ar.push(upper);
ar.push(rep);

//This used to clear input boxes when submitted
/*         $("#lower-number").val('');
$("#upper-number").val('');
$("#rep-number").val('');
$("#target").val('');

for(s = 0; s < targs; s++){
  targstring2 = "#target" + s;
  
  $(targstring2).val('');
}
*/

//Logic

localrand = 0;
times = 0; //Amount of times the target matches the RNG
percentage = 0;
index = 1;
stat = parseInt((1- Math.pow((1-(targarray.length/(parseInt(upper) - parseInt(lower)))),rep))*100); //Percentage of it happening at least once

stat = stat + "%";
for(i = 1; i<rep; i++){
  localrand = parseInt(lower) + parseInt((Math.floor(Math.random() * (upper - lower) + lower)));
  
  for(z = 0; z < targarray.length; z++){
      if(localrand == targarray[z]){
          times++;
      }
      if(times == 0){
          percentage = 0;
      }
      else{
      percentage = (times/i)*100;
          
      }
     
  }
      $("#sc").append("<tr><th scope='row'>"+ index + "</th><td>" + localrand + "</th><td>"+times + "</th><td>" + percentage + "%" + "</th><td>" + stat);
      stat = "";
      index++;
}
if(error == false){
$("#tst").html('Target(s) happened ' + times + ' times, with a percentage of ' + percentage);

}

});
$("#run-again").on("click",function(event){
$("#sc").html('');
//Getting data from global array
lower = parseInt(ar[0]);
upper = parseInt(ar[1]);
rep = parseInt(ar[2]);
//Logic repeated
event.preventDefault();

localrand = 0;
times = 0;
percentage = 0;
index = 1;
stat = parseInt((1- Math.pow((1-(targarray.length/(parseInt(upper) - parseInt(lower)))),rep))*100);
stat = stat + "%";

for(i = 1; i<rep; i++){
  localrand = parseInt(lower) + parseInt((Math.floor(Math.random() * (upper - lower) + lower)));
  
  for(z = 0; z < targarray.length; z++){
      if(localrand == targarray[z]){
          times++;
      }
      if(times == 0){
          percentage = 0;
      }
      else{                   
      percentage = (times/i)*100;
          
      }
     
  }
      $("#sc").append("<tr><th scope='row'>"+ index + "</th><td>" + localrand + "</th><td>"+times + "</th><td>" + percentage + "%" + "</th><td>" + stat);
      stat = "";
      index++;

}
if(error == false){
$("#tst").html('Target(s) happened ' + times + ' times, with a percentage of ' + percentage);

}

});
$("#auto-targ").on("click",function(event){

auto = ($("#lower-number").val().trim());
up = $("#upper-number").val().trim();
rep = $("#rep-number").val().trim();
if (auto === '' || rep == 0 || rep === '' || up == 0 || up === ''){
  alert('Add all Min, Max and Repetition values first!');
  
}
else{
event.preventDefault();
if(targs == 0){
  alert('Add targets first!')
}
else{
  for(i = 0; i < targs; i++){
     
      $("#target" + i).val(auto);
      auto++;
  }
}
}
});
function clear(){
$("#lower-number").val('');
$("#upper-number").val('');
$("#rep-number").val('');
$("#target").val('');

for(s = 0; s < targs; s++){
  targstring2 = "#target" + s;
  
  $(targstring2).val('');
}
}
$("#clear").on("click", function(){

clear();
});
$("#help").on("click", function(){
alert('This is a statistic program created by Troy Krupinski. The purpose of the program is to visualize RNG odds. The Min and Max input field are for the range of numbers you would like the RNG to produce. The repetitions field is for the amount of times you want to produce an RNG number. The targets & target fields are for how many targets and the numbers you would like to look for in the RNG data set. The Auto T button is to fill out the targets automatically.')
});
$("#loto").on("click", function(){
$("#lower-number").val(1)
$("#upper-number").val(13983816)
});
$("#top").on("click",function(){
$('html, body').animate({ scrollTop: 0 }, 'fast');
})
$("#bot").on("click", function(){
$('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
});
$("#help").hover(function(){
if(htoggle == false){
  htoggle = true;
}
else{
  htoggle = false;
}
if(htoggle == true){
$("#help").animate({
height: 55,
width: 55
});
}
});

});
